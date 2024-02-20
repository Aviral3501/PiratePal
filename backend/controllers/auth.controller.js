import User from "../db/models/user.models.js";
import bcryptjs from "bcryptjs";
import generateTokenansSetCookie from "../utils/generateToken.js";

export const signup = async(req,res) =>{
    try {
        const {fullName,username,password, confirmPassword,gender}=req.body;//data from frontend

        if(password !== confirmPassword){ //checking password and confirm password are same or not
            return res.status(400).json({msg:"Passwords do not match"});  
        } 
        
        const user= await User.findOne({username:username}); //search for the username in database
        if(user){
            return res.status(200).json({error:"User ALready Exists"});
        }

        // now hash the password entered by the user and sotre it in mongodb
        const salt = await bcryptjs.genSalt(10) ;
        //generate a salt using bcrypt
        //the higher(length) salt is ->the more is security but slower is speed
        //10 is the default value used
        const hashedPassword = await bcryptjs.hash(password,salt); //create a encrypted password using that salt
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic : (gender==="male") ? boyProfilePic : girlProfilePic
        })

       
        if(newUser){
            //generate jwt token here
             generateTokenansSetCookie(newUser._id,res);
            await newUser.save();//save into the db
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({error:"Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"});
      
        
    }
}

export const login = async(req,res) =>{
    try {
        const {username,password}= req.body;

        let user=await User.findOne({username});
        //user may not be in the db hence check ""
        const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Username or Password is incorrect!"});
        }

        //user exists and pasword is correct
        generateTokenansSetCookie(user._id,res);
        return res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        });
        
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal server error"});
        
    }
}

export const logout = async(req,res) =>{
    try {
        res.cookie("jwt", "" , {maxAge:0});
        return res.status(200).json({msg:"Logged out successfully."});

        
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal server error"});
        
    }
} 

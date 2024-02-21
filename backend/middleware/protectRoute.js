import jwt from "jsonwebtoken";
// import { generateTokenAndSetCookie, JWT_SECRET } from "../utils/generateToken.js"; 
const JWT_SECRET = "U/04yQEQGJvcgJi1wViJm+2FAs+ALKZLtQSlntRWxSk=";//secret key used to generate the token
import User from "../db/models/user.models.js";


const protectRoute = async(req,res,next) => {
    try {
        const token = req.cookies.jwt;//to  get the cookie --> middlwware cookie-parser is already in use (server.js)
        if(!token){
            return res.status(401).json({error:"Unauthorized - No token Provided"})
        }
        const decoded = jwt.verify(token , JWT_SECRET );  //verifies secret and decode the token
        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid token"});
        }
        const user = await User.findById(decoded.userId).select(["-password"]); //we don't want to send back password in response
        if(!user){
            return res.status(401).json({error: 'User not found'});
        }
        
        //if we pass all the checks then
        req.user= user;//authenticated user data without password
        next();
        
    } catch (error) {

        console.error("Error in protectroute :",error);
        return res.status(500).json({message:"Internal seerver error"});
        
    }

}

export default protectRoute;
import User from "../db/models/user.models.js";

//get the information to be displayed in the sidebar - users , profilepics , status
const getUsersForSidebar = async(req,res)=>{
    try {
        //get the id of the logged in user
        const loggedInUserId = req.user._id;//from middleware protectRoute

        const filteredUsers = await User.find({_id: {$ne : loggedInUserId}}).select("-password");  
        //dont show current loggedin user info on side bar and return others users data wihtout passsword
              
        return res.status(200).json(filteredUsers);
        
        
    } catch (error) {
        console.error("Error in getUsersForSidebar - userController : ", error);
        return res.status(500).json({  message:" Internal Server Error" });
    }

}

export default getUsersForSidebar;
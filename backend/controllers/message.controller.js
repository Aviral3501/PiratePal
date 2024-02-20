export const sendMessage = async(req,res)=>{

   try {
    
   } catch (error) {
    console.error("Error inmessage controller ",error);
    return res.status(500).json({message:"INternal server error , Message controller"});
   }
}
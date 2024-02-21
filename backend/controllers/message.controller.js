import Conversation from "../db/models/conversation.model.js"
import Messsage from "../db/models/message.models.js"

export const sendMessage = async(req,res)=>{

   try {
    const {message}=req.body;
    const {id:receiverId}= req.params;
    const senderId =req.user._id;  //get the user id from the token

    //find the conversation betwwen these users
    let conversation = await Conversation.findOne({
      participants: {$all : [senderId , receiverId]},
    })

    //if no previos conversation exits between them then - they are talkignfor  the first time so create a new one
    if(!conversation){
      conversation = await Conversation.create({
         participants: [senderId, receiverId],
      })

    }

   //  creating the messages for the conversation 
    const newMessage =  new Message({
      senderId,
      receiverId,
      message,
    })

      res.status(201).json(newMessage);
   } catch (error) {
    console.error("Error inmessage controller ",error);
    return res.status(500).json({message:"INternal server error , Message controller"});
   }
}
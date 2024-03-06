import Conversation from "../db/models/conversation.model.js";
import Message from "../db/models/message.models.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

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

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    
    //this runs sequentially
   //  await conversation.save();
   //  await newMessage.save();
   // this would take longer --> shorter version 

    await Promise.all([conversation.save() , newMessage.save()]);//this will run in parallel


    //add socket.io functionality here
    //now the data is saved in db , get receiver socketid
    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId){
      //io.to("socketid").emit() used to sedn events to a specific client
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }


      

      res.status(201).json(newMessage);
   } catch (error) {
    console.error("Error in message controller , in send message ",error);
    return res.status(500).json({message:"Internal server error , Message controller"});
   }
}

export const getMessages = async(req,res)=>{
  try {
    const {id:userToChatId} = req.params;
    const senderId = req.user._id; // from protectroute   


     const conversation = await Conversation.findOne({
      participants : {$all:[senderId , userToChatId]}
    }).populate("messages");//instead of references (i.e. messagesId) we will just show messages content(actual messages)

    if(!conversation){
      //there is no message betwwen the two
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
    
  } catch (error) {
    console.error("Error in message controller , in get messages ",error);
    return res.status(500).json({message:"Internal server error , Message controller"});
  }
} 
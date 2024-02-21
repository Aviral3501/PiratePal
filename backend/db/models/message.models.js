import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    //who was the sender
    senderId: {
        type: mongoose.Schema.Types.ObjectId  ,
        ref:"User" ,//senderIf will be the id from the user model that we have created i.e. User._id
        required:true
        },
    //who was the reciever
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    //what were the messsages
    message:{
        type:String,
        required:true
    }

    //createdAt and updatedAt fields --> timestamps
},{timestamps:true});

const Message = mongoose.model("Message",messageSchema);



export default Message;
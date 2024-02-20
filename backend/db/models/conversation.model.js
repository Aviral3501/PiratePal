import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",//take the user ids from the user model
        }
    ],
    messages : [
      {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Message",//take the messages ids from the message model
            default:[],//conversation array will be empty by default
      }
    ]
},{timestamps:true});

const Conversation = mongoose.model("Conversation" , conversationSchema);
export default Conversation;
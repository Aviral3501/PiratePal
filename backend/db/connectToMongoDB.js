import mongoose from "mongoose";
//url to connect to the database server

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Demo01:Xjtm4Ef6VQ0bacZV@cluster0.9bqikjb.mongodb.net/Chat_Application");
        console.log("connected to mongodb");
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }

}




export default connectToMongoDB;
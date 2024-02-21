//main or starting file for the backend
import dotenv from "dotenv";
import express from "express";


import authRoutes from "./routes/auth.routes.js"; 
import messageRoutes from "./routes/message.routes.js"; 
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
 

const app = express();


dotenv.config();
app.use(express.json());//middleware to parse incoming requests with json (from req.body)
app.use(cookieParser());//middleware that parses cookies and makes them available in req.cookies

//either run on port in env file or 3000
const PORT =process.env.PORT||3000;

app.get("/",(req,res)=>{ 
    //root route or home route
    res.send({message:"Welcome to our API"});
})

app.use("/api/auth" , authRoutes);//middleware
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);

app.listen(PORT ,()=>{
    console.log("App is listening on port "+PORT);
    connectToMongoDB();
}) 
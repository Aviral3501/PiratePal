import express from "express";
const router = express.Router();
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";


router.post("/send/:id", protectRoute , sendMessage);//use middlewalre protectroute to check if the has has logged in
router.get("/:id" , protectRoute , getMessages);//get messages between the current user and the :id , use middleware to check if the user is logged in

export default router; 
import express from "express";
const router = express.Router();
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

router.post("/send/:id", protectRoute , sendMessage);//use middlewalre protectroute to check if the has has logged in


export default router; 
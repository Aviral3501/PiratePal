import express from "express";

import getUsersForSidebar from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();


// get the users to be displayed in the sidebar along with profile pics 
router.get("/" , protectRoute ,getUsersForSidebar); //middleware ensure that  user is logged in before accessing this route

export default router;

import express from "express"
import { signup,login,logout } from "../controllers/auth.controller.js";

const router = express.Router();

// router.get("/login",(req,res)=>{
//     res.send("login Route");
// })
router.post("/login",login);

// router.get("/signup",(req,res)=>{
//     res.send("signup Route");
// })
router.post("/signup",signup);

// router.get("/logout",(req,res)=>{
//     res.send("logout Route");
// })
router.post("/logout",logout);

export default router;
import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
const router=Router();

router.post("/signup",(req,res)=>{
    console.log("Signup request received");
})

router.post("/signin",(req,res)=>{
    console.log("Signin request received");
})

router.get("/user",authMiddleware,(req,res)=>{
    console.log("User request received");
})

export const userRouter=router;



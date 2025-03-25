import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { SignInSchema, SignUpSchema } from "../types/auth-types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
  const body = req.body;
  const safeBody = SignUpSchema.safeParse(body);

  if (!safeBody.success) {
    res.status(400).json({ message: "Invalid body" });
    return;
  }

  const { username, password, name } = safeBody.data;

  const UserExist = await prismaClient.user.findFirst({
    where: {
      email: username,
    },
  });

  if (UserExist) {
    res.status(409).json({ message: "User already exists" });
    return;
  }

  await prismaClient.user.create({
    data: {
      email: username,
      password,
      name,
    },
  });

  res.json({
    message: "Please verify your account by checking your email",
  });
});


router.post("/signin",async (req, res) => {
  const body=req.body;
  const safeBody=SignInSchema.safeParse(body);
  if(!safeBody.success){
    res.status(411).json({message:"Invalid body"})
  }
  const user=await prismaClient.user.findFirst({
    where:{
      email:safeBody.data?.password,
      password:safeBody.data?.password
    }
  })

  if(!user){
    res.status(401).json({message:"Invalid credentials"})
  }

  const token=jwt.sign({
    id:user?.id,
  },JWT_PASSWORD)

  res.json({
    message:"User Signed in successfully",
    token
  })
  
});

router.get("/user", authMiddleware,async (req, res) => {
  //@ts-ignore
  const id=req.id

  const user= await prismaClient.user.findUnique({
    where:{
      id
    },
    select:{
      email:true,
      name:true
    }

  })

  res.json(user)
});

export const userRouter = router;

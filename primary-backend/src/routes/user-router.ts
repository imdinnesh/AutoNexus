import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { ResetPasswordSchema, SignInSchema, SignUpSchema } from "../types/auth-types";
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
    return
  }
  const user=await prismaClient.user.findFirst({
    where:{
      email:safeBody.data?.username,
      password:safeBody.data?.password
    }
  })

  if(!user){
    res.status(401).json({
      message:"Invalid credentials. Please try again"
    })
    return
  }

  const token=jwt.sign({
    id:user?.id,
  },JWT_PASSWORD)

  res.json({
    message:"User Signed in successfully",
    token
  })
  
});

router.patch("/reset-password",authMiddleware, async (req, res) => {
  const body=req.body;
  const safeBody=ResetPasswordSchema.safeParse(body);
  if(!safeBody.success){
    res.status(411).json({message:"Invalid body"})
    return
  }
  const {password,newPassword}=safeBody.data
  //@ts-ignore
  const id=req.id
  const user=await prismaClient.user.findUnique({
    where:{
      id
    }
  })

  if(password===newPassword){
    res.status(400).json({
      message:"New password cannot be same as old password"
    })
    return
  }

  if(!user){
    res.status(404).json({
      message:"User not found"
    })
    return
  }

  if(user.password!==password){
    res.status(401).json({
      message:"Invalid password"
    })
    return
  }

  await prismaClient.user.update({
    where:{
      id
    }
    ,data:{
      password:newPassword
    }
  })

  res.json({
    message:"Password updated successfully"
  })

})

router.get("/", authMiddleware,async (req, res) => {
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

import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { SignUpSchema } from "../types/auth-types";
import { prismaClient } from "../db";

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


router.post("/signin", (req, res) => {
  console.log("Signin request received");
  res.json({ message: "Signin endpoint" });
});

router.get("/user", authMiddleware, (req, res) => {
  console.log("User request received");
  res.json({ message: "User endpoint" });
});

export const userRouter = router;

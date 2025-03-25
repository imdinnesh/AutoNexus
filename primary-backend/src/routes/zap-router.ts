import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
const router = Router();

router.post("/", authMiddleware, (req, res) => {
  console.log("Zap request received");
  res.json({ message: "Zap request received" });
});

router.get("/", authMiddleware, (req, res) => {
  console.log("Zap request received");
  res.json({ message: "Zap request received" });
});

router.get("/:zapId", authMiddleware, (req, res) => {
  console.log("Zap request received");
  res.json({ message: "Zap request received" });
});

export const zapRouter = router;

import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { ZapCreateSchema } from "../types/zap-types";
import { prismaClient } from "../db";
const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const body = req.body;
  //@ts-ignore
  const id = req.id;
  const safeBody = ZapCreateSchema.safeParse(body);
  if (!safeBody.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
    return;
  }

  const zapId = await prismaClient.$transaction(async (tx) => {
    const zap = await prismaClient.zap.create({
      data: {
        userId: id,
        triggerId: "",
        actions: {
          create: safeBody.data.actions.map((action, index) => ({
            actionId: action.availableActionId,
            sortingOrder: index,
            metadata: action.actionMetaData,
          })),
        },
      },
    });

    const trigger = await tx.trigger.create({
      data: {
        triggerId: safeBody.data.availableTriggerId,
        zapId: zap.id,
      },
    });

    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        triggerId: trigger.id,
      },
    });

    return zap.id;
  });

  res.json({
    message: "Zap created",
    zapId,
  });



});

router.get("/", authMiddleware,async (req, res) => {

  //@ts-ignore
  const id=req.id;

  const zaps=await prismaClient.zap.findMany({
    where:{
      userId:id
    },
    include:{
      actions:{
        include:{
          type:true
        }
      },
      trigger:{
        include:{
          type:true
        }
      }
    }
  })

  res.json({
    message:"Zaps fetched successfully",
    zaps
  })
  
});

router.get("/:zapId", authMiddleware,async (req, res) => {
  //@ts-ignore
  const id=req.id;
  const zapId=req.params.zapId

  const zap=await prismaClient.zap.findFirst({
    where:{
      userId:id,
      id:zapId
    },
    include:{
      actions:{
        include:{
          type:true
        }
      },
      trigger:{
        include:{
          type:true
        }
      }
    }
  })

  res.json({
    message:"Zap fetched successfully",
    zap
  })
});

export const zapRouter = router;

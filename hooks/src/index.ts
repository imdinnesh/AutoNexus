import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

const client=new PrismaClient();

// test route
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// catch route

app.post("/hooks/catch/:userId/:zapId",async (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // store in db a new trigger
    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });;

        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
    })
    res.json({
        message: "Webhook received"
    })


});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

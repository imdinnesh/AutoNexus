import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();

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


});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

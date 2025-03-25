import express from "express";
import cors from "cors";
import { userRouter} from "./routes/user-router";
import { zapRouter } from "./routes/zap-router";

const app=express();
app.use(cors());
const PORT=8000;
app.use(express.json());


app.use("/api/v1/user",userRouter);
app.use("/api/v1/zap",zapRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


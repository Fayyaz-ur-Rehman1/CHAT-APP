import express from "express";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))


app.use("/api/auth", authRoutes);
app.use("/messages", messageRoutes)

app.listen(PORT, () => {
    console.log(`my server is running at port no. ${PORT}`);
    connectDB();
})
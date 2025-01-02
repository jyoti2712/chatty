import express from 'express';
import authRoutes from './src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import dotenv from 'dotenv';
import {connectdb} from './src/lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser()); // Add this middleware
app.use(cors {
    origin: "http://localhost:5173/",
    credentials: true,
})

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT;

app.listen(5001, () => {
    console.log("Server is running on port " + PORT);
    connectdb();
})
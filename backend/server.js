// const express = require("express")
import express from "express"
// const dotenv = require("dotenv")
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js"
// const app = express();

const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());// to parse the incoming requests with json payloads (from) req.body

//cookiwe parser
app.use(cookieParser());

// app.get("/",(req,res)=>{
//     // root route http://localhost:5000/
//     res.send("Hello world!!")
// })

// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route");
// })
// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route");
// })
// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route");
// })

//use middleware
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.listen(PORT,()=>{
//     connectToMongoDB();
//     console.log(`Server Running on port ${PORT}`)
// });

//after socket.io implemented

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

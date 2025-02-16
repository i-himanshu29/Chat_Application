// const express = require("express")
import express from "express"
// const dotenv = require("dotenv")
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());// to parse the incoming requests with json payloads (from) req.body

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

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

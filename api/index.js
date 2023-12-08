import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{ 
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log(e);
});


const app=express();

app.listen(3000,()=>{
    console.log("Server run port 3000");
});
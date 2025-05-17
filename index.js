import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { router } from './routes/routes.js';

dotenv.config()





const app = express();
app.use(cors({
    origin:['http://localhost:5173'],
    allowedHeaders:['Content-Type','Authorisation'],
    credentials:true,
    methods:['PUT','GET','POST','DELETE','PATCH'],
    
}))
app.use(express.json());


app.use(router);
app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`connection on http://localhost:${process.env.PORT}`);
    
})
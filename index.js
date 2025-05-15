import express from 'express';

import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { router } from './routes/routes.js';

dotenv.config()





const app = express();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`connection on http://localhost:${process.env.PORT}`);
    
})
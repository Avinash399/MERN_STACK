import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errormiddlewere } from './error/error.js';
import resarvationRouter from './routes/resarvationRoutes.js'


const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors ({
    origin:[process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/resarvation', resarvationRouter);


dbConnection();

app.use(errormiddlewere);
export default app;
// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import menuRoutes from "./routes/menuRoutes.js"

dotenv.config();
connectDB()

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://191bkvcr-5173.asse.devtunnels.ms/'
  ],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Simple route
app.get('/', (req, res) => {
  res.send('Restaurant Ordering, Delivery & Analytics System');
});

// Routes
app.use("/api/menu",menuRoutes) // menu routes
app.use('/api/orders', orderRoutes); // order routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


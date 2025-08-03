import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(` Server is running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));

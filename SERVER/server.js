import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routers/authRoutes.js';
import postRoutes from './routers/postRoutes.js';
import tipRoutes from './routers/tipRoutes.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ EcoReads API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/tips', tipRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

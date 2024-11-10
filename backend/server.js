import express from "express";

import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; 

// Load environment variables from the .env file
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();



app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.send('API is running...'));


// Use the auth routes
app.use('/api', authRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
import express from "express";

import dotenv from 'dotenv';
import cors from 'cors';

import roomRoutes from './routes/roomRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import eventRoutes from './routes/eventRoutes.js';
import budgetRoutes from './routes/budgetRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

// Load environment variables from the .env file
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();



app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.send('API is running...'));


// Use the auth routes
app.use('/api', authRoutes);
// Use the event routes
app.use('/api/events', eventRoutes);
// Use the budget routes
app.use('/api/budget', budgetRoutes); 
// Use the feedback routes
app.use('/api/feedbacks', feedbackRoutes); 
// Use the message routes
app.use('/api/messages', messageRoutes);
// use the room routes
app.use('/api/rooms', roomRoutes);
// use the notification routes
app.use('/api/notifications', notificationRoutes); 



// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
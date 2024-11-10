import express from "express";
import records from "./routes/record.js";
import dotenv from 'dotenv';
import cors from 'cors';
// import UserModel from './models/User.js';
import clubRoutes from './routes/clubRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.get('/', (req, res) => res.send('API is running...'));

app.use('/api', clubRoutes);

// app.get('/getusers', (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if (err) {
//             res.json(err); 
//         } else {
//             res.json(result);
//         }
//         });
// });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
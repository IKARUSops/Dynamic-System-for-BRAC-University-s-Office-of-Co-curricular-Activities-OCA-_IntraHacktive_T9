const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User'); // Adjust the path to your User model

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const addUser = async (email, password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Replace with the email and password you want to add
addUser('user@example.com', 'password123');

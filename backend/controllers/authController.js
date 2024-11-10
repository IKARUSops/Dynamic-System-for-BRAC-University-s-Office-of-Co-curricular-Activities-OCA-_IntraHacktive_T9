import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';  // ESM import

// Utility function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Club Account Login (Student/Faculty)
export const clubLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username (only for students)
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure the user is a student (optional validation based on your needs)
    if (user.user_type !== 'Student') {
      return res.status(400).json({ message: 'Not a Student account' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = generateToken(user._id);

    // Return the user and token
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        user_type: user.user_type,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// OCA Account Login (OCAEmployee)
export const ocaLogin = async (req, res) => {
  try {
    const { gsuit, password } = req.body;

    // Find the user by G-Suit email (gsuit in this case)
    const user = await User.findOne({ gsuit });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user is an OCA Employee
    if (user.user_type !== 'OCAEmployee') {
      return res.status(400).json({ message: 'Not an OCA Employee account' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = generateToken(user._id);

    // Return the user and token
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        gsuit: user.gsuit,
        user_type: user.user_type,
        position: user.position,
        department: user.department,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

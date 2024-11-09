const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Club Login Route
router.post('/club-login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ isAuthenticated: true });
        } else {
            res.status(401).json({ isAuthenticated: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ isAuthenticated: false, message: 'Server error' });
    }
});

// OCA Login Route
router.post('/oca-login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ isAuthenticated: true });
        } else {
            res.status(401).json({ isAuthenticated: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ isAuthenticated: false, message: 'Server error' });
    }
});

module.exports = router;

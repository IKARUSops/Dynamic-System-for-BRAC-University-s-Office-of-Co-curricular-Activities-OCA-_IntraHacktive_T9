const express = require('express');
const router = express.Router();

router.get('/clubs', (req, res) => {
    res.json({ message: 'Get all clubs' });
});

module.exports = router;

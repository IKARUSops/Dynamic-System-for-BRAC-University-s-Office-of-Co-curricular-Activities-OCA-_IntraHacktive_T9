// routes/authRoutes.js

import express from 'express';
import { clubLogin, ocaLogin } from '../controllers/authController.js'; // Correct import for named exports

const router = express.Router();

// Route for club account login
router.post('/login/club', clubLogin);

// Route for OCA account login
router.post('/login/oca', ocaLogin);

export default router;

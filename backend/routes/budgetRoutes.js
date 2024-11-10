import express from 'express';
import { createBudgetRequest } from '../controllers/budgetController.js'; // Correct import

const router = express.Router();

// Route to create a budget request
router.post('/create', createBudgetRequest);

export default router;

import express from 'express';
import { createFeedback, getFeedbackByEvent, getFeedbackById, updateFeedback, deleteFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

// Routes for Feedback
router.post('/', createFeedback);  // Create a new feedback
router.get('/event/:eventId', getFeedbackByEvent);  // Get feedbacks for a specific event
router.get('/:id', getFeedbackById);  // Get a specific feedback by its ID
router.put('/:id', updateFeedback);  // Update feedback by ID
router.delete('/:id', deleteFeedback);  // Delete feedback by ID

export default router;

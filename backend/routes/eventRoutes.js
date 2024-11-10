
import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

// Routes
router.post('/', createEvent); // Create event
router.get('/', getAllEvents); // Get all events
router.get('/:id', getEventById); // Get event by eventID (not _id)
router.put('/:id', updateEvent); // Update event by eventID (not _id)
router.delete('/:id', deleteEvent); // Delete event by eventID (not _id)

export default router;

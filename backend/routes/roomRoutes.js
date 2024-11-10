import express from 'express';
import { createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom } from '../controllers/roomController.js';

const router = express.Router();

// Routes for rooms
router.post('/', createRoom);  // Create a new room
router.get('/', getAllRooms);  // Get all rooms
router.get('/:id', getRoomById);  // Get room by ID
router.put('/:id', updateRoom);  // Update room by ID
router.delete('/:id', deleteRoom);  // Delete room by ID

export default router;

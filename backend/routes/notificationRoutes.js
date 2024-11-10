import express from 'express';
import { 
  createNotification, 
  getNotificationsByUser, 
  getNotificationById, 
  updateNotificationStatus, 
  deleteNotification 
} from '../controllers/notificationController.js';

const router = express.Router();

// Routes for notifications
router.post('/', createNotification);  // Create a new notification
router.get('/:userId', getNotificationsByUser);  // Get all notifications for a specific user
router.get('/:id', getNotificationById);  // Get notification by ID
router.put('/:id', updateNotificationStatus);  // Update notification status (read/unread)
router.delete('/:id', deleteNotification);  // Delete a notification by ID

export default router;

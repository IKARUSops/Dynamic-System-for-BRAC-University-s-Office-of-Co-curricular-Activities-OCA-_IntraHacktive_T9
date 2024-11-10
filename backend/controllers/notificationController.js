import Notification from '../models/Notification.js';

// Create a new notification
export const createNotification = async (req, res) => {
  try {
    const { user, message, link } = req.body;

    const notification = new Notification({
      user,
      message,
      link,
      status: 'unread'  // Default status is 'unread'
    });

    const savedNotification = await notification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error });
  }
};

// Get all notifications for a user
export const getNotificationsByUser = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId }).sort({ createdAt: -1 }); // Sort by most recent
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
};

// Get a specific notification by ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notification', error });
  }
};

// Update the status of a notification (mark as 'read' or 'unread')
export const updateNotificationStatus = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error updating notification', error });
  }
};

// Delete a notification by ID
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting notification', error });
  }
};

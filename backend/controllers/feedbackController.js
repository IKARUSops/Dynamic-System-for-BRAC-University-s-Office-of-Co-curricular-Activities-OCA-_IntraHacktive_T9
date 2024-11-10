import Feedback from '../models/Feedback.js';  // Import the Feedback model

// Create a new feedback
export const createFeedback = async (req, res) => {
  try {
    const { event, user, content, rating } = req.body;

    // Create a new feedback document
    const feedback = new Feedback({
      event,
      user,
      content,
      rating
    });

    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Error creating feedback', error });
  }
};

// Get all feedback for a specific event
export const getFeedbackByEvent = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ event: req.params.eventId }).populate('user');
    if (!feedbacks) {
      return res.status(404).json({ message: 'No feedback found for this event' });
    }
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error });
  }
};

// Get a single feedback by its ID
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id).populate('user event');
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error });
  }
};

// Update a feedback by ID
export const updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error updating feedback', error });
  }
};

// Delete a feedback by ID
export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting feedback', error });
  }
};

import Event from '../models/Event.js';
import { v4 as uuidv4 } from 'uuid';  // Import uuid to generate unique eventID

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, description, club, status, date, venue, budget, feedback, timeline } = req.body;
    
    // Generate a unique eventID
    const eventID = uuidv4();

    const event = new Event({
      eventID,  // Add the generated eventID
      title,
      description,
      club,
      status,
      date,
      venue,
      budget,
      feedback,
      timeline
    });

    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('club venue feedback');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};

// Get a single event by ID (using eventID)
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({ eventID: req.params.id }).populate('club venue feedback');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error });
  }
};

// Update an event by ID (using eventID)
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate({ eventID: req.params.id }, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
};

// Delete an event by ID (using eventID)
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({ eventID: req.params.id });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
};

import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';  // Import uuid to generate unique IDs

const { Schema } = mongoose;

const eventSchema = new Schema({
  eventId: { type: String, unique: true, default: uuidv4 },  // Use UUID for eventId
  title: { type: String, required: true },
  description: String,
  club: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  date: { type: Date, required: true },
  venue: { type: Schema.Types.ObjectId, ref: 'Room' },
  budget: { type: Number },
  feedback: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }],
  timeline: [{ 
    milestone: String, 
    dueDate: Date 
  }]
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
export default Event;

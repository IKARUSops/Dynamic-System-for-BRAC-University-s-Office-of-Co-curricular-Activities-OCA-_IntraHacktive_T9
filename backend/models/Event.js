import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// Initialize the auto-increment plugin
autoIncrement.initialize(mongoose.connection);

const eventSchema = new Schema({
  eventId: { type: String, unique: true },
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

// Add auto-increment plugin to the eventId field
eventSchema.plugin(autoIncrement.plugin, {
  model: 'Event',
  field: 'eventId',
  startAt: 1,  // Start numbering from 1
  incrementBy: 1  // Increment by 1
});

const Event = mongoose.model('Event', eventSchema);
export default Event;

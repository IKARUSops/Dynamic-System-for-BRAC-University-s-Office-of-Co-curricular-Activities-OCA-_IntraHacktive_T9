import mongoose from 'mongoose';
const { Schema } = mongoose;

const clubSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  leader: { type: Schema.Types.ObjectId, ref: 'User' },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  budget: { type: Number, default: 0 }
}, {
  timestamps: true
});

const Club = mongoose.model('Club', clubSchema);
export default Club;

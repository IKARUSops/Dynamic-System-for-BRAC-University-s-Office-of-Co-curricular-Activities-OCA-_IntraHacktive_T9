const eventSchema = new Schema({
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
  
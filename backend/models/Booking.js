const bookingSchema = new Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, enum: ["confirmed", "pending", "cancelled"], default: "pending" }
  }, {
    timestamps: true
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);
  export default Booking;
  
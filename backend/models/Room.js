const roomSchema = new Schema({
    name: { type: String, required: true },
    capacity: Number,
    resources: [{ type: String }], // e.g., ["projector", "microphone"]
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
  }, {
    timestamps: true
  });
  
  const Room = mongoose.model('Room', roomSchema);
  export default Room;
  
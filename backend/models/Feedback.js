const feedbackSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 } // Rating from 1 to 5
  }, {
    timestamps: true
  });
  
  const Feedback = mongoose.model('Feedback', feedbackSchema);
  export default Feedback;
  
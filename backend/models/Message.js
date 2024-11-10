const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    attachments: [{ type: String }],
    status: { type: String, enum: ["sent", "received", "read"], default: "sent" }
  }, {
    timestamps: true
  });
  
  const Message = mongoose.model('Message', messageSchema);
  export default Message;
  
import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
  tokenId: { type: String, required: true, unique: true },  // Token ID for each chat session
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  attachments: [{ type: String }],
  status: { type: String, enum: ['sent', 'received', 'read'], default: 'sent' },  // Message status
  chatStatus: { type: String, enum: ['open', 'closed'], default: 'open' },  // Chat status (open or closed)
}, {
  timestamps: true
});

const Message = mongoose.model('Message', messageSchema);
export default Message;

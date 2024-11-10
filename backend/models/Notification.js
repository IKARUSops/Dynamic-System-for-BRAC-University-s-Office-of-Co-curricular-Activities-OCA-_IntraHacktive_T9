import mongoose from 'mongoose';
const { Schema } = mongoose;

const notificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    link: String, // Optional link to redirect for more info
    status: { type: String, enum: ["unread", "read"], default: "unread" }
  }, {
    timestamps: true
  });
  
  const Notification = mongoose.model('Notification', notificationSchema);
  export default Notification;
  
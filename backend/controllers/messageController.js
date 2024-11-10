import Message from '../models/Message.js';

// Create a new message
export const createMessage = async (req, res) => {
  try {
    const { tokenId, sender, recipient, content, attachments } = req.body;

    const message = new Message({
      tokenId,
      sender,
      recipient,
      content,
      attachments
    });

    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error });
  }
};

// Get all messages for a specific token ID
export const getMessagesByTokenId = async (req, res) => {
  try {
    const messages = await Message.find({ tokenId: req.params.tokenId }).populate('sender recipient');
    if (!messages.length) {
      return res.status(404).json({ message: 'No messages found for this token ID' });
    }
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error });
  }
};

// Close a chat (update chatStatus to 'closed')
export const closeChat = async (req, res) => {
  try {
    const { tokenId } = req.params;
    
    const updatedChat = await Message.updateMany(
      { tokenId },
      { $set: { chatStatus: 'closed' } }
    );
    
    if (!updatedChat.nModified) {
      return res.status(404).json({ message: 'No open chat found with this token ID' });
    }
    
    res.status(200).json({ message: 'Chat closed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error closing chat', error });
  }
};

// Get the status of the chat by token ID
export const getChatStatus = async (req, res) => {
  try {
    const chat = await Message.findOne({ tokenId: req.params.tokenId }).sort({ createdAt: -1 });
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    res.status(200).json({ chatStatus: chat.chatStatus });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat status', error });
  }
};

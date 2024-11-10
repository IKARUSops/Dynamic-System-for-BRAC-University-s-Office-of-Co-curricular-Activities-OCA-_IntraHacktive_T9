import express from 'express';
import { createMessage, getMessagesByTokenId, closeChat, getChatStatus } from '../controllers/messageController.js';

const router = express.Router();

// Routes for messages
router.post('/', createMessage);  // Create a new message
router.get('/:tokenId', getMessagesByTokenId);  // Get all messages for a specific token ID
router.put('/close/:tokenId', closeChat);  // Close a chat by token ID
router.get('/status/:tokenId', getChatStatus);  // Get the chat status by token ID

export default router;

import express from 'express';
import { createChat, findAll, findChatById, deleteChat, updateChat } from '../controllers/chat.controller.';
const router = express.Router();

router.post('/add', createChat);
router.get('/all', findAll);
router.get('/:id', findChatById);
router.put('/update/:id', updateChat);
router.delete('/delete/:id', deleteChat);



export default router;
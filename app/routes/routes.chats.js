import express from 'express';
import { createUser, findAll, findUserById, deleteUser, updateUser } from '../controllers/user.controller';
const router = express.Router();

router.post('add', createUser);
router.get('/user/all', findAll);
router.get('/user/:id', findUserById);
router.put('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);



export default router;
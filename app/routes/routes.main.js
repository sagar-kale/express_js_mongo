import express from 'express';
import { createUser, findAll, findUserById, deleteUser, updateUser } from '../controllers/user.controller';
import { getFakeData } from '../controllers/fake.controller';
const router = express.Router();

router.post('/user/add', createUser);
router.get('/user/all', findAll);
router.get('/user/:id', findUserById);
router.put('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);
router.get('/users/all', getFakeData);

export default router;
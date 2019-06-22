import express from 'express';
import { createUser, findAll, findUserById, deleteUser, updateUser } from '../controllers/user.controller';
import { getFakeData } from '../controllers/fake.controller';
const router = express.Router();

router.post('/add', createUser);
router.get('/all', findAll);
router.get('/:id', findUserById);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/all/fake', getFakeData);



export default router;
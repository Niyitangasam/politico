import express from 'express';
import { createUser, logIn } from '../controller/userController';


const router = express.Router();

router.post('/signup', createUser);
router.get('/login', logIn);

export default router;

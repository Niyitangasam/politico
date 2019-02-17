import express from 'express';
import { createUser, logIn } from '../controller/userController';


const router = express.Router();

router.post('/signup', createUser);
router.post('/login', logIn);

export default router;

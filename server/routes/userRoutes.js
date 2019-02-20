import express from 'express';
import { createUser, logIn, passwordReset } from '../controller/userController';


const router = express.Router();

router.post('/signup', createUser);
router.post('/login', logIn);
router.post('/reset', passwordReset);

export default router;

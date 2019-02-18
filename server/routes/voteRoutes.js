import express from 'express';
import { verifyToken } from '../middlewares/auth';

import saveVote from '../controller/voteController';

const router = express.Router();

router.post('/', verifyToken, saveVote);

export default router;

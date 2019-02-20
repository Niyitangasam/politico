import express from 'express';
import { verifyToken } from '../middlewares/auth';

import startPetition from '../controller/petitionController';

const router = express.Router();

router.post('/', verifyToken, startPetition);

export default router;

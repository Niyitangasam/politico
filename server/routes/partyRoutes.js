import express from 'express';
import {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
} from '../controller/partyController';

import { verifyToken, checkAdminAccess } from '../middlewares/auth';

const router = express.Router();
router.post('/', [verifyToken, checkAdminAccess], createParty);
router.get('/', verifyToken, getAllParty);
router.get('/:id', verifyToken, getOnlyOne);
router.patch('/:id/name', verifyToken, editPartyName);
router.delete('/:id', [verifyToken, checkAdminAccess], deleteParty);

export default router;

import express from 'express';
import {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
} from '../controller/partyController';

const router = express.Router();
router.post('/', createParty);
router.get('/', getAllParty);
router.get('/:id', getOnlyOne);
router.patch('/:id/name', editPartyName);
router.delete('/:id', deleteParty);

export default router;

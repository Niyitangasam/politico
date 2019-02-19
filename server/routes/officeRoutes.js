import express from 'express';
import {
  createOffice, getAll, getById, registerCandidate, getOfficesResult,
} from '../controller/officeController';
import { verifyToken, checkAdminAccess } from '../middlewares/auth';

const router = express.Router();
router.post('/', [verifyToken, checkAdminAccess], createOffice);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.post('/:id/register', [verifyToken, checkAdminAccess], registerCandidate);
router.get('/:id/result', verifyToken, getOfficesResult);

export default router;

import express from 'express';
import {
  createOffice, getAll, getById, registerCandidate,
} from '../controller/officeController';
import { verifyToken, checkAdminAccess } from '../middlewares/auth';

const router = express.Router();
router.post('/', [verifyToken, checkAdminAccess], createOffice);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.post('/:id/register', [verifyToken, checkAdminAccess], registerCandidate);

module.exports = router;

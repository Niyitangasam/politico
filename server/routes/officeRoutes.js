import express from 'express';
import { createOffice, getAll, getById } from '../controller/officeController';
import { verifyToken, checkAdminAccess } from '../middlewares/auth';

const router = express.Router();
router.post('/', [verifyToken, checkAdminAccess], createOffice);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);

module.exports = router;

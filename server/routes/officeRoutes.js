import express from 'express';
import { createOffice, getAll, getById } from '../controller/officeController';

const router = express.Router();
router.post('/', createOffice);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

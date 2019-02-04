const express = require('express');
const officeController = require('../controller/officeController');

const router = express.Router();
router.post('/', officeController.createOffice);
router.get('/', officeController.getAll);
router.get('/:id', officeController.getById);

module.exports = router;

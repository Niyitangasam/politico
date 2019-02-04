const express = require('express');
const partyController = require('../controller/partyController');

const router = express.Router();
router.post('/', partyController.createParty);
router.get('/', partyController.getAll);
router.get('/:id', partyController.getById);
router.patch('/:id/:name', partyController.editPartyName);
router.delete('/:id', partyController.deleteParty);


module.exports = router;

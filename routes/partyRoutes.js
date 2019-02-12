const express = require('express');
const partyController = require('../controller/partyController');

const router = express.Router();
router.post('/', partyController.createParty);
router.get('/', partyController.getAllParty);
router.get('/:id', partyController.getOnlyOne);
router.patch('/:id/name', partyController.editPartyName);
router.delete('/:id', partyController.deleteParty);


module.exports = router;

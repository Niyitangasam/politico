const parties = require('../model/party');

// create a party
exports.createParty = (req, res) => {
  const newParty = {
    id: parties.length + 1,
    name: req.body.name,
    hqAddress: req.body.hqAddress,
    logoUrl: req.body.logoUrl,
  };
  parties.push(newParty);
  return res.send({ status: 200, data: newParty });
};


// Fetch a specific political party record.

exports.getById = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  return res.send({ status: 200, data: party });
};


// Fetch all political parties records

exports.getAll = (req, res) => res.send({ status: 200, data: parties });

// Edit the name of a specific political party
exports.editPartyName = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  party.name = req.params.name;
  return res.send({ status: 200, data: party });
};

// Delete a specific political party.
exports.deleteParty = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  const index = parties.indexOf(party);
  parties.splice(index, 1);
  return res.send({ status: 200, data: party });
};

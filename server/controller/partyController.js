import parties from '../model/party';

// create a party
const createParty = (req, res) => {
  const newParty = {
    id: parties.length + 1,
    name: req.body.name,
    hqAddress: req.body.hqAddress,
    logoUrl: req.body.logoUrl,
  };
  parties.push(newParty);
  return res.status(201).send({ status: 201, data: newParty });
};


// Fetch a specific political party record.

const getOnlyOne = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.status(404).send({ status: 404, Error: 'The party with given ID was not found' });
  return res.send({ status: 200, data: party });
};


// Fetch all political parties records

const getAllParty = (req, res) => res.send({
  status: 200, data: parties,
});

// Edit the name of a specific political party
const editPartyName = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  party.name = req.body.name;
  const updatedData = {
    id: party.id,
    name: party.name,
  };
  return res.send({ status: 200, data: [updatedData] });
};

// Delete a specific political party.
const deleteParty = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  const index = parties.indexOf(party);
  parties.splice(index, 1);
  return res.send({ status: 200, data: party });
};

export {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
};

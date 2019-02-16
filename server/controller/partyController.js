import Helper from '../Helper/Helper';
import Model from '../db/Party';
import parties from '../model/party';

// create a party
const createParty = async (req, res) => {
  const data = req.body;
  const result = Helper.isValidParty(data);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }

  const AddPartyQuery = new Model(data);
  if (!await AddPartyQuery.createNewParty()) return res.status(400).send({ status: 400, Error: 'Unable to create Party' });

  return res.status(201).send({ status: 201, data: AddPartyQuery.result });
  // const newParty = {
  //   id: parties.length + 1,
  //   name: data.name,
  //   hqAddress: data.hqAddress,
  //   logoUrl: data.logoUrl,
  // };
  // parties.push(newParty);

  // const response = {
  //   id: newParty.id,
  //   name: newParty.name,
  // };
  // return res.status(201).send({ status: 201, data: [response] });
};


// Fetch a specific political party record.

const getOnlyOne = (req, res) => {
  const party = parties.find(p => p.id === parseInt(req.params.id, 10));
  if (!party) return res.status(404).send({ status: 404, Error: 'The party with given ID was not found' });
  const response = {
    id: party.id,
    name: party.name,
    logoUrl: party.logoUrl,
  };
  return res.send({ status: 200, data: [response] });
};


// Fetch all political parties records

const getAllParty = (req, res) => {
  const response = [];


  for (let index = 0; index < parties.length; index += 1) {
    const party = {
      id: parties[index].id,
      name: parties[index].name,
      logoUrl: parties[index].logoUrl,
    };
    response.push(party);
  }
  return res.send({ status: 200, data: response });
};

// Edit the name of a specific political party
const editPartyName = (req, res) => {
  const party = parties.find(eachParty => eachParty.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  const result = Helper.isValidPartyName(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }
  party.name = req.body.name;
  const updatedData = {
    id: party.id,
    name: party.name,
  };
  return res.send({ status: 200, data: [updatedData] });
};

// Delete a specific political party.
const deleteParty = (req, res) => {
  const party = parties.find(eachParty => eachParty.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  const index = parties.indexOf(party);
  parties.splice(index, 1);
  return res.send({ status: 200, message: ['Party Deleted'] });
};

export {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
};

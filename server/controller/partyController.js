
import joi from 'joi';
import parties from '../model/party';

// create a party
const createParty = (req, res) => {
  const data = req.body;

  const schema = joi.object().keys({
    name: joi.string().regex(/[a-zA-Z]/).min(3).max(40)
      .required(),
    hqAddress: joi.string().min(3).max(60).required(),
    logoUrl: joi.string().min(5).max(200).required(),
  });
  const result = joi.validate(data, schema, {
    abortEarly: false,
  });
  if (result.error != null) {
    const errors = [];
    for (let index = 0; index < result.error.details.length; index += 1) {
      errors.push(result.error.details[index].message.split('"').join(' '));
    }
    return res.status(422).send({ status: 422, Error: errors });
  }

  const newParty = {
    id: parties.length + 1,
    name: data.name,
    hqAddress: data.hqAddress,
    logoUrl: data.logoUrl,
  };
  parties.push(newParty);

  const response = {
    id: newParty.id,
    name: newParty.name,
  };
  return res.status(201).send({ status: 201, data: [response] });
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
  const schema = joi.object().keys({
    name: joi.string().regex(/[a-zA-Z]/).min(3).required(),
  });
  const result = joi.validate(req.body, schema, {
    abortEarly: false,
  });
  if (result.error === null) {
    party.name = req.body.name;
    const updatedData = {
      id: party.id,
      name: party.name,
    };
    return res.send({ status: 200, data: [updatedData] });
  }
  const errors = [];
  for (let index = 0; index < result.error.details.length; index += 1) {
    errors.push(result.error.details[index].message.split('"').join(' '));
  }
  return res.status(422).send({ status: 422, Error: errors });
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

import Helper from '../Helper/Helper';
import Model from '../db/Party';


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

const getOnlyOne = async (req, res) => {
  const { id } = req.params;
  const RetrieveOneQuery = new Model(id);
  if (!await RetrieveOneQuery.getPartyById()) return res.status(500).send({ status: 500, Error: 'Error in getting data' });
  if (RetrieveOneQuery.result.length === 0) return res.status(404).send({ status: 404, Error: 'Records not found' });
  return res.status(200).send({ status: 200, data: RetrieveOneQuery.result });

  /* const party = parties.find(p => p.id === parseInt(req.params.id, 10));
    if (!party) return res.status(404)
    .send({ status: 404, Error: 'The party with given ID was not found' });
    const response = {
    id: party.id,
    name: party.name,
    logoUrl: party.logoUrl,
  };
  return res.send({ status: 200, data: [response] }); */
};


// Fetch all political parties records

const getAllParty = async (req, res) => {
  const GetAllQuery = new Model();
  if (!await GetAllQuery.getParties()) return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  if (GetAllQuery.result.length === 0) return res.send({ status: 404, Error: 'Records not found' });
  return res.send({ status: 200, data: GetAllQuery.result });

/*  const response = [];
  for (let index = 0; index < parties.length; index += 1) {
    const party = {
      id: parties[index].id,
      name: parties[index].name,
      logoUrl: parties[index].logoUrl,
    };
    response.push(party);
  }
  return res.send({ status: 200, data: response }); */
};

// Edit the name of a specific political party
const editPartyName = async (req, res) => {
  const result = Helper.isValidPartyName(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }
  const { name } = req.body;
  const EditNameQuery = new Model(parseInt(req.params.id, 10));
  if (!await EditNameQuery.getPartyById()) return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  if (EditNameQuery.result.length === 0) return res.send({ status: 404, Error: 'Record not found' });
  if (!await EditNameQuery.updateName(name)) return res.send({ status: 500, Error: 'Unable to Edit it' });
  return res.send({ status: 200, data: EditNameQuery.result });

/* const party = parties.find(eachParty => eachParty.id === parseInt(req.params.id, 10));
  if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  party.name = req.body.name;
  const updatedData = {
    id: party.id,
    name: party.name,
  };
  return res.send({ status: 200, data: [updatedData] }); */
};

// Delete a specific political party.
const deleteParty = async (req, res) => {
  const DeletePartyQuery = new Model(parseInt(req.params.id, 10));
  if (!await DeletePartyQuery.getPartyById()) return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  if (DeletePartyQuery.result.length === 0) return res.send({ status: 404, Error: 'Record not found' });
  if (!await DeletePartyQuery.deleteParty()) return res.send({ status: 404, Error: 'Unable to delete it, Try Again' });
  return res.send({ status: 200, message: ['Party Deleted'] });

  /* const party = parties.find(eachParty => eachParty.id === parseInt(req.params.id, 10));
   if (!party) return res.send({ status: 404, Error: 'The party with given ID was not found' });
  const index = parties.indexOf(party);
  parties.splice(index, 1);
  return res.send({ status: 200, message: ['Party Deleted'] }); */
};

export {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
};

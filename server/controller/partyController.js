import Model from '../Model/party';
import Helper from '../Helper/Helper';


// create a party
const createParty = async (req, res) => {
  const data = req.body;
  const result = Helper.isValidParty(data);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }

  const AddPartyQuery = new Model(data);
  if (await AddPartyQuery.getPartyByName() && await AddPartyQuery.rowCount > 0) {
    return res.status(409).send({ status: 409, error: 'Party Name Already Exist' });
  }
  if (!await AddPartyQuery.createNewParty()) {
    return res.status(500).send({ status: 500, Error: 'Internal error' });
  }

  return res.status(201).send({ status: 201, message: 'Party created Successfully', data: AddPartyQuery.result });
};


// Fetch a specific political party record.

const getOnlyOne = async (req, res) => {
  const { id } = req.params;
  const RetrieveOneQuery = new Model(id);
  if (!await RetrieveOneQuery.getPartyById()) {
    return res.status(500).send({ status: 500, Error: 'Error in getting data' });
  }
  if (RetrieveOneQuery.result.length === 0) {
    return res.status(404).send({ status: 404, Error: 'Party not found' });
  }
  return res.status(200).send({ status: 200, data: RetrieveOneQuery.result });
};


// Fetch all political parties records

const getAllParty = async (req, res) => {
  const GetAllQuery = new Model();
  if (!await GetAllQuery.getParties()) {
    return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  }
  if (GetAllQuery.result.length === 0) {
    return res.send({ status: 404, Error: 'Parties not found' });
  }
  return res.send({ status: 200, data: GetAllQuery.result });
};

// Edit the name of a specific political party
const editPartyName = async (req, res) => {
  const result = Helper.isValidPartyName(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }
  const { name } = req.body;
  const EditNameQuery = new Model(parseInt(req.params.id, 10));
  if (!await EditNameQuery.getPartyById()) {
    return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  }
  if (EditNameQuery.result.length === 0) {
    return res.send({ status: 404, Error: 'Party not found' });
  }
  if (!await EditNameQuery.updateName(name)) {
    return res.send({ status: 500, Error: 'Unable to Edit it' });
  }
  return res.send({ status: 200, data: EditNameQuery.result });
};

// Delete a specific political party.
const deleteParty = async (req, res) => {
  const DeletePartyQuery = new Model(parseInt(req.params.id, 10));
  if (!await DeletePartyQuery.getPartyById()) {
    return res.status(500).send({ status: 500, Error: 'Error in retriving data' });
  }
  if (DeletePartyQuery.result.length === 0) {
    return res.send({ status: 404, Error: 'Party not found' });
  }
  if (!await DeletePartyQuery.deleteParty()) {
    return res.send({ status: 404, Error: 'Unable to delete it, Try Again' });
  }
  return res.send({ status: 200, message: ['Party Deleted'] });
};

export {
  createParty, getAllParty, getOnlyOne, editPartyName, deleteParty,
};

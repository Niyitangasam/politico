import Helper from '../Helper/Helper';
import ModelOffice from '../model/office';


// Create a political office
const createOffice = async (req, res) => {
  const result = Helper.isValidOffice(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }

  const AddOfficeQuery = new ModelOffice(req.body);
  if (await AddOfficeQuery.getOfficeByName() && await AddOfficeQuery.rowCount > 0) {
    return res.status(409).send({ status: 409, error: 'Office Name Already Exist' });
  }
  if (!await AddOfficeQuery.createNewOffice()) {
    return res.status(500).send({ status: 500, Error: 'Internal Error' });
  }
  return res.status(201)
    .send({ status: 201, message: 'Office successfully created', data: AddOfficeQuery.result });
};


// Fetch all political offices records

const getAll = async (req, res) => {
  const GetAllOffice = new ModelOffice();
  if (!await GetAllOffice.getOffices()) {
    return res.status(400).send({ status: 400, Error: 'Unable to retrieve all Offices!' });
  }
  if (GetAllOffice.result.length === 0) {
    return res.send({ status: 404, Error: 'Offices not found' });
  }
  return res.send({ status: 200, data: GetAllOffice.result });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const RetrieveOneOfficeQuery = new ModelOffice(id);
  if (!await RetrieveOneOfficeQuery.getOfficeById()) {
    return res.status(500).send({ status: 500, Error: 'Error in getting data' });
  }
  if (RetrieveOneOfficeQuery.result.length === 0) {
    return res.status(404).send({ status: 404, Error: 'Office not found' });
  }
  return res.status(200).send({ status: 200, data: RetrieveOneOfficeQuery.result });
};


const registerCandidate = async (req, res) => {
  const result = Helper.validateCandidate(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }

  const checkIDQuery = new ModelOffice(req.params.id);
  if (!await checkIDQuery.getOfficeById()) {
    return res.status(500).send({ status: 500, Error: 'Error in getting data' });
  }
  if (checkIDQuery.result.length === 0) {
    return res.status(404).send({ status: 404, Error: 'Office with that iD was not found' });
  }
  const values = req.body;
  values.office = req.params.id;
  const AddCandidateQuery = new ModelOffice(values);
  if (!await AddCandidateQuery.registerCandidate()) {
    return res.status(422)
      .send({
        status: 422, Error: [AddCandidateQuery.error.detail],
      });
  }
  return res.status(201).send({ status: 201, data: AddCandidateQuery.result });
};

const getOfficesResult = async (req, res) => {
  const getResultQuery = new ModelOffice(req.params.id);
  if (!await getResultQuery.getResults()) {
    return res.status(500).send({ status: 500, Error: 'Error in getting data' });
  }
  if (getResultQuery.result.length === 0) {
    return res.status(404).send({ status: 404, Error: 'Offices not found' });
  }
  return res.status(200).send({ status: 200, data: getResultQuery.result });
};

export {
  createOffice, getAll, getById, registerCandidate, getOfficesResult,
};

import offices from '../model/office';

// Create a political office
const createOffice = (req, res) => {
  const newOffice = {
    id: offices.length + 1,
    type: req.body.type,
    name: req.body.name,
  };
  offices.push(newOffice);
  return res.status(201).send({ status: 200, data: newOffice });
};


// Fetch all political offices records

const getAll = (req, res) => res.send({ status: 200, data: offices });

const getById = (req, res) => {
  const office = offices.find(o => o.id === parseInt(req.params.id, 10));
  if (!office) return res.status(404).send({ status: 404, Error: 'The Office  with given ID was not found' });
  return res.send({ status: 200, data: office });
};

export { createOffice, getAll, getById };

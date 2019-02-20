import Helper from '../Helper/Helper';
import ModelPetition from '../model/petition';


const startPetition = async (req, res) => {
  const result = Helper.validatePetition(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }

  const AddPetitionQuery = new ModelPetition(req.body);
  if (!await AddPetitionQuery.startPetition()) {
    return res.status(422)
      .send({
        status: 422, Error: [AddPetitionQuery.error.detail],
      });
  }
  console.log(AddPetitionQuery.result);
  return res.status(201).send({ status: 201, message: 'Petition Started Successfully', data: AddPetitionQuery.result });
};
export default startPetition;

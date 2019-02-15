import Joi from 'joi';

class Helper {
  // Check if it is a valid party

  static isValidParty(data) {
    const schema = Joi.object().keys({
      name: Joi.string().regex(/[a-zA-Z]/).min(3).max(40)
        .required(),
      hqAddress: Joi.string().min(3).max(60).required(),
      logoUrl: Joi.string().uri().required(),
    });
    return Joi.validate(data, schema);
  }

  // check updated party name if it is valid

  static isValidPartyName(data) {
    const schema = Joi.object().keys({
      name: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
    });
    return Joi.validate(data, schema);
  }

  // check if it is valid office
  static isValidOffice(data) {
    const schema = Joi.object().keys({
      type: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
      name: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
    });
    return Joi.validate(data, schema);
  }

  // Invalid data message

  static invalidDataMessage(res, result) {
    const errors = [];
    for (let index = 0; index < result.error.details.length; index += 1) {
      errors.push(result.error.details[index].message.split('"').join(' '));
    }
    return res.status(422).send({ status: 422, Error: errors });
  }
}

export default Helper;

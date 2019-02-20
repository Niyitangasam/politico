import Joi from 'joi';

class Helper {
  // Check if it is a valid party

  static isValidParty(party) {
    const schema = Joi.object().keys({
      name: Joi.string().regex(/[a-zA-Z]/).min(3).max(40)
        .required(),
      hqAddress: Joi.string().min(3).max(60).required(),
      logoUrl: Joi.string().uri().required(),
    });
    return Joi.validate(party, schema);
  }

  // check updated party name if it is valid

  static isValidPartyName(partyName) {
    const schema = Joi.object().keys({
      name: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
    });
    return Joi.validate(partyName, schema);
  }

  // check if it is valid office
  static isValidOffice(office) {
    const schema = Joi.object().keys({
      type: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
      name: Joi.string().regex(/[a-zA-Z]/).min(3).required(),
    });
    return Joi.validate(office, schema);
  }

  static validateCandidate(candidate) {
    const schema = Joi.object().keys({
      party: Joi.number().integer().required(),
      candidate: Joi.number().integer().required(),
    });
    return Joi.validate(candidate, schema);
  }


  static isValidUser(user) {
    const schema = {
      firstname: Joi.string().min(5).required(),
      lastname: Joi.string().min(5).required(),
      othername: Joi.string().min(5),
      email: Joi.string().email().min(5).required(),
      phoneNumber: Joi.string().min(5).required(),
      passportUrl: Joi.string().uri().required(),
      password: Joi.string().min(5).required(),
      isAdmin: Joi.boolean().default(false),
    };
    return Joi.validate(user, schema);
  }

  static validateVote(vote) {
    const schema = Joi.object().keys({
      createdOn: Joi.date().required(),
      createdBy: Joi.number().integer().required(),
      office: Joi.number().integer().required(),
      candidate: Joi.number().integer().required(),
    });
    return Joi.validate(vote, schema);
  }

  static validatePetition(petition) {
    const schema = Joi.object().keys({
      createdBy: Joi.number().integer().required(),
      office: Joi.number().integer().required(),
      body: Joi.string().min(5).required(),
      evidence: Joi.string().uri().required(),
    });
    return Joi.validate(petition, schema);
  }


  // Validate Logins
  static isValidlogin(login) {
    const schema = {
      email: Joi.string().email().min(5).required(),
      password: Joi.string().min(5).required(),
    };
    return Joi.validate(login, schema);
  }

  // Validate Emails

  static isValidEmail(email) {
    const schema = {
      email: Joi.string().email().min(5).required(),
    };
    return Joi.validate(email, schema);
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

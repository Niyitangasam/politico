import Helper from '../Helper/Helper';
import UserDB from '../db/User';
import { checkPassword } from '../Helper/password';
import { generateToken } from '../middlewares/auth';

const createUser = async (req, res) => {
  const result = Helper.isValidUser(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }
  const createUserQuery = new UserDB(req.body);
  if (await createUserQuery.fetchUser() && await createUserQuery.rowCount > 0) return res.status(409).send({ status: 409, error: 'Email Already Exist' });
  if (!await createUserQuery.createNewUser()) return res.status(500).send({ status: 500, error: 'Internal Error, Please Try Again' });
  const user = createUserQuery.result;
  const token = generateToken(user.email);
  return res.status(201).send({ status: 201, data: [{ token, user }] });
};

const logIn = async (req, res) => {
  const result = Helper.isValidlogin(req.body);
  if (result.error) {
    return Helper.invalidDataMessage(res, result);
  }
  const loginUserQuery = new UserDB(req.body);
  if (await loginUserQuery.fetchUser() && await loginUserQuery.rowCount === 0) return res.status(404).send({ status: 404, error: 'User Not found' });
  console.log('@@@@@@@@@', result);
  const user = await loginUserQuery.result[0];
  if (!checkPassword(user.password, req.body.password)) return res.status(401).send({ status: 401, error: 'Incorrect Email or password' });
  const token = generateToken(user.email);
  return res.status(200).send({ status: 200, data: [{ token, user }] });
};


export { createUser, logIn };

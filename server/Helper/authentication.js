import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const encryptPass = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));


export const checkPassword = (hash, password) => bcrypt.compareSync(password, hash);

export const generateToken = (Userid) => {
  const token = jwt.sign({
    userId: Userid,
  },
  process.env.JWT_SECRET);
  return token;
};

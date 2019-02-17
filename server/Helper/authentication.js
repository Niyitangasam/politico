import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const encryptPass = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));


export const checkPassword = (hash, password) => bcrypt.compareSync(password, hash);

export const generateToken = (id) => {
  const token = jwt.sign({
    userId: id,
  },
  process.env.JWT_SECRET, { expiresIn: '7d' });
  return token;
};

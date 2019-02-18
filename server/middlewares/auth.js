import JWT from 'jsonwebtoken';
import dbCon from '../config/connection';

// Generate Token

const generateToken = (email) => {
  const token = JWT.sign({
    userEmail: email,
  },
  'niyitangasamueldoingandelachallenge');
  return token;
};
// check token

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization || req.body.token;
  if (!token) return res.status(403).send({ status: 403, error: 'No token provided' });
  try {
    const decodedToken = await JWT.verify(token, 'niyitangasamueldoingandelachallenge');
    const { rows } = await dbCon.query('SELECT * FROM users WHERE email= $1', [decodedToken.userEmail]);
    if (!rows) return res.status(403).send({ status: 403, error: 'Failed to authenticate token' });
    req.user = rows;
    next();
  } catch (error) {
    return res.status(403).send({ status: 403, error });
  }
};


// check administrator access

const checkAdminAccess = async (req, res, next) => {
  if (req.user[0].isadmin !== true) return res.status(403).send({ status: 403, error: 'Access not Allowed' });
  return next();
};


export { verifyToken, checkAdminAccess, generateToken };

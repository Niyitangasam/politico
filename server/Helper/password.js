import bcrypt from 'bcrypt';


export const encryptPass = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));


export const checkPassword = (hash, password) => bcrypt.compareSync(password, hash);

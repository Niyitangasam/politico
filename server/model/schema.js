const createUsers = `CREATE TABLE IF NOT EXISTS
users(
    id: SERIAL PRIMARY KEY NOT NULL,,
    firstname: VARCHAR(150) NOT NULL,
    lastname: VARCHAR(150) NOT NULL,
    othername: VARCHAR(150),
    email: VARCHAR(40) UNIQUE NOT NULL,
    phoneNumber: VARCHAR(20),
    passportUrl: VARCHAR(20),
    isAdmin: BOOLEAN,
    );`;
const createParties = `CREATE TABLE IF NOT EXISTS
   parties(
      id: SERIAL PRIMARY KEY NOT NULL,,
      name: VARCHAR(150) NOT NULL,
      hqAddress: VARCHAR(150) NOT NULL,
      logoUrl: VARCHAR(20),
    );`;

export default { createUsers, createParties };

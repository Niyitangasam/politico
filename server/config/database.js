import dbCon from './connection';
import { encryptPass } from '../Helper/password';

const dropAllTables = async () => {
  const client = await dbCon.connect();
  try {
    const dropTables = 'DROP TABLE IF EXISTS votes, candidates, petitions, parties, offices, users';
    await client.query(dropTables);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};
const Parties = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS parties
    (
      id_party SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(150) NOT NULL,
      hqAddress VARCHAR(150) NOT NULL,
      logoUrl VARCHAR(500) NOT NULL
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};
const Offices = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS offices
    (
      id_office SERIAL PRIMARY KEY NOT NULL,
      type VARCHAR(150) NOT NULL,
      name VARCHAR(150) NOT NULL
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};
const Users = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS users
    (
      id_user SERIAL PRIMARY KEY NOT NULL,
      firstname VARCHAR(50) NOT NULL,
      lastname VARCHAR(50) NOT NULL,
      othername VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL,
      phone_number VARCHAR(50) NOT NULL,
      passport_url VARCHAR(50) NOT NULL,
      isAdmin BOOLEAN
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};

const Candidates = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS candidates
    (
      id_candidate SERIAL NOT NULL UNIQUE, 
      office_id INTEGER REFERENCES  offices(id_office) ON DELETE CASCADE,
      party_id INTEGER REFERENCES parties(id_party) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
      PRIMARY KEY (user_id ,office_id)
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};

const Votes = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS votes 
    (
   id_vote  SERIAL NOT NULL,
   createdOn  Date ,
   createdBy  INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
   office  INTEGER REFERENCES offices(id_office) ON DELETE CASCADE,
   candidate INTEGER REFERENCES candidates(id_candidate) ON DELETE CASCADE,
   PRIMARY KEY (office ,createdBy)
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};
const Petitions = async () => {
  const client = await dbCon.connect();
  try {
    const query = `CREATE TABLE IF NOT EXISTS petitions
   (
    id_petition SERIAL PRIMARY KEY NOT NULL,
    createdOn  Date ,
    createdBy  INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
    office INTEGER REFERENCES offices(id_office) ON DELETE CASCADE,
    body VARCHAR(100) NOT NULL,
    evidence VARCHAR(200)
    );`;
    await client.query(query);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};

const InsertAdmin = async () => {
  const client = await dbCon.connect();
  try {
    const query = 'INSERT INTO users(firstname, lastname, othername, email, password, phone_number, passport_url, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
    await client.query(query, ['Samuel', 'NIYITANGA', 'NIKOBAHOZE', 'niyitangasam@gmail.com', encryptPass('niyitanga'), '0788783963', 'htpps://ihiytgghfghvhg/kmn.mnjn.pg', 'true']);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};
const InsertUser = async () => {
  const client = await dbCon.connect();
  try {
    const query = 'INSERT INTO users(firstname, lastname, othername, email, password, phone_number, passport_url, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
    await client.query(query, ['Sam', 'NIYORE', 'Umutare', 'niksam@gmail.com', encryptPass('niyitanga'), '0788783963', 'htpps://iHGFDKghvhg/kmn.mMMn.pg', 'false']);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
};

(async () => {
  await dropAllTables();
  await Parties();
  await Users();
  await Offices();
  await Candidates();
  await Votes();
  await Petitions();
  await InsertUser();
  await InsertAdmin();
  console.log('tables created');
})().catch((err) => {
  console.log(err);
});

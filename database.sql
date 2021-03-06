
DROP DATABASE IF EXISTS politico;
CREATE DATABASE politico;

\c politico;
DROP TABLE IF EXISTS votes, candidates, petitions, parties, offices, users;
CREATE TABLE IF NOT EXISTS parties
    (
      id_party SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(150) NOT NULL,
      hqAddress VARCHAR(150) NOT NULL,
      logoUrl VARCHAR(500) NOT NULL
    );
CREATE TABLE IF NOT EXISTS offices
    (
      id_office SERIAL PRIMARY KEY NOT NULL,
      type VARCHAR(150) NOT NULL,
      name VARCHAR(150) NOT NULL
    );

CREATE TABLE IF NOT EXISTS users
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
    );
CREATE TABLE IF NOT EXISTS candidates
    (
      id_candidate SERIAL NOT NULL UNIQUE, 
      office_id INTEGER REFERENCES  offices(id_office) ON DELETE CASCADE,
      party_id INTEGER REFERENCES parties(id_party) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
      PRIMARY KEY (user_id ,office_id)
    );

CREATE TABLE IF NOT EXISTS votes 
    (
   id_vote  SERIAL NOT NULL,
   createdOn  Date ,
   createdBy  INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
   office  INTEGER REFERENCES offices(id_office) ON DELETE CASCADE,
   candidate INTEGER REFERENCES candidates(id_candidate) ON DELETE CASCADE,
   PRIMARY KEY (office ,createdBy)
    );
CREATE TABLE IF NOT EXISTS petitions
   (
    id_petition SERIAL PRIMARY KEY NOT NULL,
    createdOn  Date ,
    createdBy  INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
    office INTEGER REFERENCES offices(id_office) ON DELETE CASCADE,
    body VARCHAR(200) NOT NULL,
    evidence VARCHAR(200)

   	);



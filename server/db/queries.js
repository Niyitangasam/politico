// party queries
export const createNewPartyQuery = 'INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) returning *';
export const getPartyByIDQuery = 'SELECT * FROM parties WHERE id_party = $1';
export const retrieveAllparties = 'SELECT * FROM parties';
export const deleteParty = 'DELETE FROM parties WHERE id_party = $1';
export const updateName = (name, partyId) => `UPDATE parties SET name= '${name}' WHERE id_party = ${partyId} returning *`;

// Office queries

export const createNewOfficeQuery = 'INSERT INTO offices(type, name) VALUES($1, $2) returning *';
export const getAlloffices = 'SELECT * FROM offices';
export const getOfficeByIDQuery = 'SELECT * FROM offices WHERE id_office= $1';
export const registerCandiateQuery = 'INSERT INTO offices(office_id, party_id, user_id) VALUES($1, $2, $3) returning *';

// Use queries

export const insertUser = 'INSERT INTO users(firstname, lastname, othername, email, password, phone_number, passport_url, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning *';
export const getUser = 'SELECT * FROM users WHERE email= $1';

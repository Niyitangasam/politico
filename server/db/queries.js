// party queries
export const createNewPartyQuery = 'INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) returning *';
export const getPartyByIDQuery = 'SELECT * FROM parties WHERE id_party = $1';
export const retrieveAllparties = 'SELECT * FROM parties';
export const deleteParty = 'DELETE FROM parties WHERE id_party = $1';
export const updateName = (name, partyId) => `UPDATE parties SET name= '${name}' WHERE id_party = ${partyId} returning *`;

// Office queries

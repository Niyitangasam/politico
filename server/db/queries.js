const createNewParty = 'INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) returning *';

export default createNewParty;

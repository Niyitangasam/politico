import dbCon from '../config/connection';


export default class Party {
// initialize class

  constructor(data = null) {
    this.data = data;
    this.result = null;
    this.error = null;
  }
  // create new party

  async createNewParty() {
    const {
      name, hqAddress, logoUrl,
    } = this.data;
    const values = [name, hqAddress, logoUrl];
    try {
      const { rows } = await dbCon.query('INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) returning *', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getPartyById() {
    try {
      const values = [this.data];
      const { rows } = await dbCon.query('SELECT * FROM parties WHERE id_party = $1', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getParties() {
    try {
      const { rows } = await dbCon.query('SELECT * FROM parties');
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async updateName(name) {
    const partyId =this.data;
    try {
      const { rows } = await dbCon.query(`UPDATE parties SET name= '${name}' WHERE id_party = ${partyId} returning *`);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async deleteParty() {
    try {
      const { rows } = await dbCon.query('DELETE FROM parties WHERE id_party = $1', [this.data]);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

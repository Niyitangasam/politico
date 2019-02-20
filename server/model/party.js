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
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows } = await dbCon.query('INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) returning id_party, name', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getPartyById() {
    try {
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const values = [this.data];
      const { rows } = await dbCon.query('SELECT id_party, name, logourl FROM parties WHERE id_party = $1', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getParties() {
    try {
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows } = await dbCon.query('SELECT id_party, name, logourl FROM parties');
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async updateName(name) {
    const partyId = this.data;
    try {
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows } = await dbCon.query(`UPDATE parties SET name= '${name}' WHERE id_party = ${partyId} returning id_party, name`);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async deleteParty() {
    try {
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows } = await dbCon.query('DELETE FROM parties WHERE id_party = $1', [this.data]);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getPartyByName() {
    const { name } = this.data;
    try {
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows, rowCount } = await dbCon.query('SELECT * FROM parties WHERE name= $1', [name]);
      this.result = rows;
      this.rowCount = rowCount;
      return true;
    } catch (error) {
      this.error = error.stack;
      return false;
    }
  }
}

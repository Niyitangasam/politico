import dbCon from '../config/connection';

export default class Office {
// initialize class

  constructor(data = null) {
    this.data = data;
    this.result = null;
    this.error = null;
  }

  // create new party

  async createNewOffice() {
    const { type, name } = this.data;
    const values = [type, name];
    try {
      const { rows } = await dbCon.query('INSERT INTO offices(type, name) VALUES($1, $2) returning *', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getOffices() {
    try {
      const { rows } = await dbCon.query('SELECT * FROM offices');
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getOfficeById() {
    try {
      const values = [this.data];
      const { rows } = await dbCon.query('SELECT * FROM offices WHERE id_office= $1', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async registerCandidate() {
    const { office, party, candidate } = this.data;
    const values = [office, party, candidate];
    try {
      const { rows } = await dbCon.query('INSERT INTO candidates(office_id, party_id, user_id) VALUES($1, $2, $3) returning *', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

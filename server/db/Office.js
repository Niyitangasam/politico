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
      const value = [this.data];
      const { rows } = await dbCon.query('SELECT * FROM offices WHERE id_office= $1', value);
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

  async getResults() {
    const value = this.data;
    const dataToReturn = [];
    try {
      const { rows } = await dbCon.query('SELECT  office ,candidate, CAST(COUNT(*)AS Int) AS result FROM votes GROUP BY candidate, office ');
      for (let votes = 0; votes < rows.length; votes += 1) {
        if (rows[votes].office === parseInt(value, 10)) {
          dataToReturn.push(rows[votes]);
        }
      }
      this.result = dataToReturn;
      return true;
    } catch (error) {
      this.error = error;
      console.log(this.error);
      return false;
    }
  }
}

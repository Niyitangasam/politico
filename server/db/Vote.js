import dbCon from '../config/connection';

export default class Vote {
// initialize class

  constructor(data = null) {
    this.data = data;
    this.result = null;
    this.error = null;
  }

  async voteCandidate() {
    const {
      createdOn, createdBy, office, candidate,
    } = this.data;
    const values = [createdOn, createdBy, office, candidate];
    try {
      const { rows } = await dbCon.query('INSERT INTO votes(createdOn, createdBy, office, candidate) VALUES($1, $2, $3, $4) returning *', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

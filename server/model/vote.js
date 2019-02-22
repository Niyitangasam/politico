import dbCon from '../config/connection';

export default class vote {
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
      /*
        @rows returns all the data from the queries and it is built in property in pq query
        @rowCount returns all  number of rows of data obtained from the queries
        and it is built in property in pq query as well
      */
      const { rows } = await dbCon.query('INSERT INTO votes(createdOn, createdBy, office, candidate) VALUES($1, $2, $3, $4) returning office, candidate, createdBy As voter', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

import dbCon from '../config/connection';

export default class vote {
// initialize class

  constructor(data = null) {
    this.data = data;
    this.result = null;
    this.error = null;
  }

  async startPetition() {
    const {
      createdBy, office, body, evidence,
    } = this.data;
    const createdOn = new Date();
    const values = [createdOn, createdBy, office, body, evidence];

    try {
      const { rows } = await dbCon.query('INSERT INTO petitions(createdOn, createdBy, office, body, evidence) VALUES($1, $2, $3, $4, $5) returning id_petition As id,office, createdby, body As text, evidence', values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      console.log(this.error);
      return false;
    }
  }
}

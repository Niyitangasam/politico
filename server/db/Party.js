import dbCon from '../config/connection';
import createNewParty from './queries';

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
      const { rows } = await dbCon.query(createNewParty, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

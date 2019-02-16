import dbCon from '../config/connection';
import { createNewOfficeQuery, getAlloffices, getOfficeByIDQuery } from './queries';

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
      const { rows } = await dbCon.query(createNewOfficeQuery, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getOffices() {
    try {
      const { rows } = await dbCon.query(getAlloffices);
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
      const { rows } = await dbCon.query(getOfficeByIDQuery, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

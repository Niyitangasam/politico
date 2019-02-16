import dbCon from '../config/connection';
import {
  getPartyByIDQuery, createNewPartyQuery, retrieveAllparties, deleteParty, updateName,
} from './queries';

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
      const { rows } = await dbCon.query(createNewPartyQuery, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getPartyById() {
    try {
      const query = getPartyByIDQuery;
      const values = [this.data];
      const { rows } = await dbCon.query(query, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async getParties() {
    try {
      const { rows } = await dbCon.query(retrieveAllparties);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async updateName(name) {
    try {
      const { rows } = await dbCon.query(updateName(name, this.data));
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async deleteParty() {
    try {
      const { rows } = await dbCon.query(deleteParty, [this.data]);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }
}

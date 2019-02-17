import dbCon from '../config/connection';
import { encryptPass } from '../Helper/authentication';
import { insertUser, getUser } from './queries';

export default class User {
// A constructor for user class

  constructor(data = null) {
    this.data = data;
    this.result = null;
    this.error = null;
    this.rowCount = null;
  }

  async createNewUser() {
    const {
      firstname, lastname, othername, email, password, phoneNumber, passportUrl, isAdmin,
    } = this.data;
    const values = [firstname, lastname, othername, email,
      encryptPass(password), phoneNumber, passportUrl, isAdmin];
    try {
      const { rows } = await dbCon.query(insertUser, values);
      this.result = rows;
      return true;
    } catch (error) {
      this.error = error;
      return false;
    }
  }

  async fetchUser() {
    const { email } = this.data;
    try {
      const { rows, rowCount } = await dbCon.query(getUser, [email]);
      this.result = rows;
      this.rowCount = rowCount;
      return true;
    } catch (error) {
      this.error = error.stack;
      return false;
    }
  }
}

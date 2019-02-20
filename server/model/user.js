import dbCon from '../config/connection';
import { encryptPass } from '../Helper/password';


export default class user {
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
      const { rows } = await dbCon.query('INSERT INTO users(firstname, lastname, othername, email, password, phone_number, passport_url, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning id_user, firstname, lastname, othername, email, phone_number, passport_url, isAdmin', values);
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
      const { rows, rowCount } = await dbCon.query('SELECT * FROM users WHERE email= $1', [email]);
      this.result = rows;
      this.rowCount = rowCount;
      return true;
    } catch (error) {
      this.error = error.stack;
      return false;
    }
  }
}

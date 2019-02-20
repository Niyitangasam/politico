import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});// pool.on('connect', () => console.log('DB CONNECTED#'));

export default pool;

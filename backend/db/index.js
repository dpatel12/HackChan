const { Pool } = require('pg');
const dotenv = require('dotenv').config();
//const cs = "postgresql://postgres:droptablesallday@localhost:5432/hackchan";
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_ADDRESS,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT

   //process.env.DATABASE_URL || process.env.LOCALDATABASE
});

module.exports = {
  pool
}

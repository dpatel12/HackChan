const { Pool } = require('pg');
const dotenv = require('dotenv').config();
//const cs = "postgresql://postgres:droptablesallday@localhost:5432/hackchan";
const pool = process.env.DATABASE_URL === null ? new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_ADDRESS,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}) : new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = {
  pool
}

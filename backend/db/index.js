const { Pool } = require('pg');
//const cs = "postgresql://postgres:droptablesallday@localhost:5432/hackchan";
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'hackchan',
  password: 'droptablesallday',
  port: 5432

   //process.env.DATABASE_URL || process.env.LOCALDATABASE
});

module.exports = {
  pool,
  query: (queryString, params, callback) => {
    return pool.query(queryString, params, callback);
  }
}

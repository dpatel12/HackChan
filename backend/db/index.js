const { Pool } = require('pg');
//const cs = "postgresql://postgres:droptablesallday@localhost:5432/hackchan";
const pool = new Pool({
  user: 'postgres',
  host: '172.17.0.2',
  database: 'postgres',
  password: 'pd',
  port: 5432

   //process.env.DATABASE_URL || process.env.LOCALDATABASE
});

module.exports = {
  pool,
  query: (queryString, params, callback) => {
    return pool.query(queryString, params, callback);
  }
}

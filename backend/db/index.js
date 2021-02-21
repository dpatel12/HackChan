const pg = require('pg');

const pool = new pg.Pool({
  connectionString: "postgresql://postgres:pd@localhost:5432/postgres" || process.env.DATABASE_URL || process.env.LOCALDATABASE
});

module.exports = {
  pool,
  query: (queryString, params, callback) => {
    return pool.query(queryString, params, callback);
  }
}

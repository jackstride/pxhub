const { Pool } = require('pg');

// Future setup in .env file
const pool = new Pool({
  user: 'postgres',
  password: 'rootuser',
  host: 'localhost',
  port: 5432,
  database: 'px_database',
});

const connectPost = async () => {
  console.log('Connecting to the database...');
  await pool.connect();
  console.log('Connecton Successful');
};

try {
  connectPost();
} catch (error) {
  console.log(error);
}

// Dwefualt Node PostGrey Project Structure
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params);
  },
};

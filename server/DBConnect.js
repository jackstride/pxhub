const { Pool } = require('pg');
const conenctString = process.env.CONNECTION_STRING;

const pool = new Pool({
  user: 'postgres',
  password: 'rootuser',
  host: 'localhost',
  port: 5432,
  database: 'px_database',
});

const connectPost = async () => {
  console.log('Before Connection');
  await pool.connect();
  console.log('connected');
};

try {
  connectPost();
  // const query = {
  //   text:
  //     'INSERT INTO users(user_id, email, password, first_name) VALUES($1, $2,$3,$4)',
  //   values: [
  //     '05',
  //     'test@test.com',
  //     '$2b$10$1EyhjHQ5WvB3x8aWnA9lJebPDitsZsa.MA6955gDqzlQbeJJ.ml.m',
  //     'Jack',
  //   ],
  // };
  // // callback
  // pool.query(query, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     console.log(err.stack);
  //   } else {
  //     console.log('added');
  //     console.log(res.rows[0]);
  //   }
  // });
} catch (error) {
  console.log(error);
}

module.exports = pool;

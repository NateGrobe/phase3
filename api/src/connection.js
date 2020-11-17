const mysql = require('mysql');
const config = require('./utils/config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.USER,
  password: config.PASS,
  database: 'hospital_data'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;

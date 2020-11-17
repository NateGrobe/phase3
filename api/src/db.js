const mysql = require('mysql');
const config = require('./utils/config');

const db = mysql.createConnection({
  host: 'localhost',
  user: config.USER,
  password: config.PASS,
  database: 'hospital_data'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = db;

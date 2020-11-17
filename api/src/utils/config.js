require('dotenv').config();

let PORT = process.env.PORT;
let USER = process.env.UN;
let PASS = process.env.PASS;

module.exports = {
  PORT,
  USER,
  PASS
};

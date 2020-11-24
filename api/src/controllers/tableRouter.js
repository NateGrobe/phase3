const viewRouter = require('express').Router();
const sql = require('../db.js');

viewRouter.get('/billing', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.billing`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

viewRouter.get('/patients', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.patients`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = viewRouter;

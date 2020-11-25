const tableRouter = require('express').Router();
const sql = require('../db.js');

tableRouter.get('/billing', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.billing`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

tableRouter.get('/patients', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.patients`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

tableRouter.get('/doctors', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.doctors`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

tableRouter.get('/nurses', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.nurses`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

tableRouter.get('/patient-visit', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.patient_visit`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = tableRouter;

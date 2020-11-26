const tableRouter = require('express').Router();
const sql = require('../db.js');

const Patient = function(p) {
  this.patient_fName = p.patient_fName;
  this.patient_mName = p.patient_mName;
  this.patient_lName = p.patient_lName;
  this.doctor_ID = p.doctor_ID;
  this.nurse_ID = p.nurse_ID;
  this.deceased = p.deceased;
};

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

tableRouter.post('/patients', (req, res) => {
  const body = req.body;

  if (!body) {
    res.status(400).send({
      message: 'content can not be empty'
    });
  }

  const patient = new Patient({
    patient_fName: body.patient_fName,
    patient_mName: body.patient_mName,
    patient_lName: body.patient_lName,
    doctor_ID: body.doctor_ID,
    nurse_ID: body.nurse_ID,
    deceased: body.deceased
  });

  sql.query('INSERT INTO hospital_data.patients SET ?', patient, (err, result) => {
    if (err) throw err;
    res.send(patient);
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

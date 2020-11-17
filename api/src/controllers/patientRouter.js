const patientRouter = require('express').Router();
const Patient = require('../models/patientModel');

patientRouter.get('/', (req, res) => {
  Patient.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
        err.message || 'Some error occurred while retrieving customers.'
      });
    } else {
      res.send(data);
    }
  });

});

module.exports = patientRouter;

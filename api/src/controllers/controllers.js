const Patient = require('../models/patientModel');

exports.findAll = (req, res) => {
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
};

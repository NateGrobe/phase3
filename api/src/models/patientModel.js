const sql = require('../connection.js');

const Patient = (patient) => {
  this.id = patient.patient_ID;
  this.fName = patient.patient_fName;
  this.mName = patient.patient_mName;
  this.lName = patient.patient_lName;
  this.doc_id = patient.doctor_id;
  this.nurse_id = patient.nurse_id;
  this.deceased = patient.deceased;
};

Patient.getAll = (result) => {
  sql.query('SELECT * FROM patients', (err, res) => {
    if(err) {
      console.log('error:', err);
      result(err, null);
      return;
    }

    result(null, res);
    return;
  });
};

module.exports = Patient;

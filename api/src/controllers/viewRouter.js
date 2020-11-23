const viewRouter = require('express').Router();
const sql = require('../db.js');

// view 1
viewRouter.get('/patients', (req, res) => {
  sql.query(`
    SELECT p.patient_ID, p.patient_fName, p.patient_mName, p.patient_lName, n.nurse_name, d.doctor_name, d.doctor_Type
    FROM hospital_data.patients AS p
    JOIN hospital_data.nurses AS n ON p.nurse_ID = n.nurse_ID
    JOIN hospital_data.doctors AS d ON p.doctor_ID = d.doctor_ID`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 2
viewRouter.get('/covid-patients', (req, res) => {
  sql.query(`
    SELECT p.patient_ID, p.patient_fName, p.patient_lName, p.doctor_ID
    FROM hospital_data.patients AS p
    WHERE p.patient_ID = ANY
      (SELECT patient_ID
      FROM hospital_data.patient_visit
      WHERE diagnosis='COVID-19')
      ORDER BY p.doctor_ID`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 3
viewRouter.get('/large-total-billing', (req, res) => {
  sql.query(`
    SELECT patient_ID
    FROM billing WHERE price_total >
      (SELECT AVG(price_total) FROM billing WHERE price_total > 0)`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 4
viewRouter.get('/doctors-patients', (req, res) => {
  sql.query(`
    SELECT d.doctor_Name, d.doctor_Type, p.patient_fName, p.patient_lName
    FROM hospital_data.patients AS p
    LEFT JOIN hospital_data.doctors AS d ON p.doctor_ID = d.doctor_ID
    UNION
    SELECT  d.doctor_Name, d.doctor_Type, p.patient_fName, p.patient_lName
    FROM hospital_data.patients AS p
    RIGHT JOIN hospital_data.doctors AS d ON p.doctor_ID = d.doctor_ID`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 5
viewRouter.get('/covid-risk', (req, res) => {
  sql.query(`
    SELECT p.patient_ID, p.patient_fName, p.patient_lName FROM hospital_data.patients AS p
    WHERE patient_ID = ANY
      (SELECT pv.patient_ID FROM hospital_data.patient_visit AS pv
      WHERE pv.diagnosis LIKE '%heart%' OR pv.diagnosis LIKE '%cardiac%')
    AND doctor_ID = ANY
      (SELECT p.doctor_ID FROM hospital_data.patients AS p
      WHERE p.patient_ID = ANY
        (SELECT patient_ID FROM hospital_data.patient_visit WHERE diagnosis='COVID-19'))
    UNION
    SELECT p.patient_fName, p.patient_lName FROM hospital_data.patients AS p
    WHERE p.doctor_ID = 3 OR p.doctor_ID = 7`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 6
viewRouter.get('/multi-patient-doctors', (req, res) => {
  sql.query(`
    SELECT doctor_id
    from patients
    GROUP BY doctor_id
    HAVING COUNT(*) > 1`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 7
viewRouter.get('/outstanding-balance', (req, res) => {
  sql.query(`
    SELECT patient_ID
    FROM billing 
    WHERE oustanding_Balance > 0`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 8
viewRouter.get('/open-rooms', (req, res) => {
  sql.query(`
    SELECT room_ID, room_Type
    FROM room
    WHERE patient_ID IS null
    ORDER BY room_Type`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 9
viewRouter.get('/multi-patient-nurses', (req, res) => {
  sql.query(`
    SELECT nurse_ID
    from patients
    GROUP BY nurse_ID
    HAVING COUNT(*) > 1`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// view 10
viewRouter.get('/heart-risk', (req, res) => {
  sql.query(`
    SELECT patient_ID
    FROM patient_info
    WHERE smoker > 0 AND drugs > 0
    AND patient_HealthConditions LIKE '%heart%' OR patient_HealthConditions LIKE '%cardiac%'`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = viewRouter;

import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';

const Patients = () => {
  // also add doctor view stuff for multiple filters
  const [patientData, setPatientData] = useState([]);

  async function getPatients() {
    const data = await viewServices.view1();
    setPatientData(data);
  }

  useEffect(() => {
    getPatients();
  }, []);

  console.log(patientData);
  return (
    <div>
      {patientData.map(patient => <div key={patient.patient_ID}>{patient.patient_fName}</div>)}
    </div>
  );
};

export default Patients;

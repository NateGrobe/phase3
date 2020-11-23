import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';

const Patients = () => {
  // also add doctor view stuff for multiple filters
  const [patientData, setPatientData] = useState([]);
  const [filter, setFilter] = useState("");

  async function getPatients() {
    const data = await viewServices.view1();
    setPatientData(data);
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    getPatients();
  }, []);

  const filteredPatients = patientData.filter(p => 
    p.patient_fName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_lName.toUpperCase().includes(filter.toUpperCase()));

  return (
    <div>
      <div className="grid-1-1">
        <div className="button">Filter Search </div>
      <input type="text" onChange={handleFilter} value={filter} />
      </div>
    
      {filteredPatients.map(patient =>
        <div key={patient.patient_ID} className="widget grid-1-4 row">
          <div className="title">
             {patient.patient_fName}
          </div>
        </div>
      )}
    </div>
  );
};




export default Patients;

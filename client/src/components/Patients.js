import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';

const Patients = () => {
  // also add doctor view stuff for multiple filters
  const [patientData, setPatientData] = useState([]);
  const [filter, setFilter] = useState("");

  async function getView1() {
    const data = await viewServices.view1();
    setPatientData(data);
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    getView1();
  }, []);

  const filteredPatients = patientData.filter(p => 
    p.patient_fName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_lName.toUpperCase().includes(filter.toUpperCase()));

  return (
    <div>
      <div className="grid-1-1">
        <div className="font">PATIENTS</div>
        
      <input type="text" onChange={handleFilter} value={filter} />
      <div className="button">Filter Search </div>
      </div>
    
      {filteredPatients.map(patient =>
        <div key={patient.patient_ID} className="grid-1-2 row">
          <div className="widget">
              <div className="title">
                {patient.patient_fName} {patient.patient_lName}
              </div>
              <div>
                  Doctor: {patient.doctor_name}
              </div>
              <div>
                  Profession: {patient.doctor_Type}
              </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default Patients;

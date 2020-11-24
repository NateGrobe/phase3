import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';

const Patients = () => {
  // also add doctor view stuff for multiple filters
  const [patientData, setPatientData] = useState([]);
  const [filter, setFilter] = useState("");
  const [pv, setPv] = useState([]);

  async function getView1() {
    const data = await viewServices.view1();
    setPatientData(data);
  }

  async function getPV() {
    const data = await tableServices.getPatientVisitTable();
    setPv(data);
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    getView1();
    getPV();
  }, []);

  function downloadPatientHistory(pid) {
    const element = document.createElement("a");
    const patientData = pv.filter(p => p.patient_ID === pid);
    const file = new Blob([JSON.stringify(patientData)], {type: 'text/json'});
    element.href = URL.createObjectURL(file);
    element.download = "patient-data.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const filteredPatients = patientData.filter(p => 
    p.patient_fName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_mName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_lName.toUpperCase().includes(filter.toUpperCase()));

  return (
    <div>
      <div className="grid-1-1">
        <div className="font">PATIENTS</div>
        
        <input type="text" onChange={handleFilter} value={filter} />
        <div className="button">Filter Search</div>
      </div>
    
      {/*filteredPatients.map(patient =>
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
      )*/}

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Nurse</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(p =>
          <tr key={p.patient_ID}>
            <td>{p.patient_fName} {p.patient_mName} {p.patient_lName}</td>
            <td>{p.doctor_name} {p.doctor_Type}</td>
            <td>{p.nurse_name}</td>
            <td><button onClick={() => downloadPatientHistory(p.patient_ID)}>Download Records</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;

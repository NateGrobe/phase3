import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';

const Patients = () => {
  // also add doctor view stuff for multiple filters
  const [patientData, setPatientData] = useState([]);
  const [pv, setPv] = useState([]);
  const [filter, setFilter] = useState("");
  const [pfName, setPfName] = useState("");
  const [pmName, setPmName] = useState("");
  const [plName, setPlName] = useState("");
  const [docID, setDocID] = useState("");
  const [nurseID, setNurseID] = useState("");
  const [showAP, setShowAP] = useState(false);

  async function getView1() {
    const data = await viewServices.view1();
    setPatientData(data);
  }

  async function getPV() {
    const data = await tableServices.getPatientVisitTable();
    setPv(data);
  }

  async function addPatient(event) {
    const patient = {
      patient_fName: pfName,
      patient_mName: pmName,
      patient_lName: plName,
      doctor_ID: Number(docID),
      nurse_ID: Number(nurseID),
      deceased: 0
    };

    await tableServices.addPatient(patient);
    setPfName("");
    setPmName("");
    setPlName("");
    setDocID("");
    setNurseID("");
    setShowAP(false);
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    getView1();
    getPV();
  }, []);

  function downloadPatientHistory(pid, fname, lname) {
    const element = document.createElement("a");
    const patientData = pv.filter(p => p.patient_ID === pid);
    const file = new Blob([JSON.stringify(patientData)], {type: 'text/json'});
    element.href = URL.createObjectURL(file);
    element.download = `${fname}-${lname}-history.json`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const addPatientForm = () => {
    return (
      <div className="addPatient">
        <form onSubmit={addPatient}>
          First Name <input value={pfName} onChange={({ target }) => setPfName(target.value)} />
          <br/>
          Middle Name <input value={pmName} onChange={({ target }) => setPmName(target.value)} />
          <br/>
          Last Name <input value={plName} onChange={({ target }) => setPlName(target.value)} />
          <br/>
          Doctor ID <input value={docID} onChange={({ target }) => setDocID(target.value)}/>
          <br/>
          Nurse ID <input value={nurseID} onChange={({ target }) => setNurseID(target.value)}/>
          <br/>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }

  const filteredPatients = patientData.filter(p => 
    p.patient_fName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_mName.toUpperCase().includes(filter.toUpperCase()) ||
    p.patient_lName.toUpperCase().includes(filter.toUpperCase()));

  return (
    <div>
      <div className="grid-1-1">
        <div className="font"><h3>PATIENTS</h3></div>
        
        <input type="text" placeholder="Search" onChange={handleFilter} value={filter} />
        <button onClick={() => setShowAP(!showAP)}>{showAP ? "Hide" : "Add Patient"}</button>
      </div>
    
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Nurse</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(p =>
          <tr key={p.patient_ID || patientData.length}>
            <td>{p.patient_fName} {p.patient_mName} {p.patient_lName}</td>
            <td>{p.doctor_name}, {p.doctor_Type}</td>
            <td>{p.nurse_name}</td>
            <td><button onClick={() => downloadPatientHistory(p.patient_ID, p.patient_fName, p.patient_lName)}>
              Download Records
            </button></td>
          </tr>
          )}
        </tbody>
      </table>

        {showAP && addPatientForm()}
      
    </div>
  );
};

export default Patients;

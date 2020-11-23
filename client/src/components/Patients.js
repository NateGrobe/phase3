import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
//import 'materialize-css';
//import { Button, Card, Row, Col } from 'react-materialize';



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


  console.log(patientData);
  return (
    <div>
      <input onChange={handleFilter} value={filter} />
      {filteredPatients.map(patient =>
        <div key={patient.patient_ID} className="widget grid-1-4 row">
          <div className="title">
             {patient.patient_fName}
          </div>
        </div>
      )}

          
  <ul className="collapsible">
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
        
    </div>
    
  );
};




export default Patients;

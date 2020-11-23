import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';



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
          {patientData.map(patient => <div key={patient.patient_ID} className="widget grid-1-4 row">

          
                <div className="title">
                   {patient.patient_fName}
                </div>
          


          </div>)}

          
  <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
        
    </div>
    
  );
};




export default Patients;

import React, { useState, useEffect } from 'react';
import covidServices from '../services/covidServices';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';
import Covidcases from './Covidcases';
import Covidrisk from './Covidrisk';
import Heartrisk from './Heartrisk';

const Covid = () => {
  const [patientTable, setPatientTable] = useState([]);
  const [totalCases, setTotalCases] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [covidPatients, setCovidPatients] = useState([]);
  const [covidRisk, setCovidRisk] = useState([]);
  const [heartRisk, setHeartRisk] = useState([]);
  const [showCP, setShowCP] = useState(true);
  const [showCR, setShowCR] = useState(false);
  const [showHR, setShowHR] = useState(false);

  async function getTodaysCovidData() {
    const data = await covidServices.getCaseCount();
    const todaysTotal = data[data.length -1].Cases;
    setTotalCases(todaysTotal);
    setNewCases(todaysTotal - data[data.length -2].Cases);
  }

  async function getView2() {
    const data = await viewServices.view2();
    setCovidPatients(data);
  }

  async function getView5() {
    const data = await viewServices.view2();
    setCovidRisk(data);
  }

  async function getView10() {
    const data = await viewServices.view10();
    setHeartRisk(data);
  }
  
  async function getCovidTable() {
    const data = await tableServices.getPatientsTable();
    setPatientTable(data);
  }

  useEffect(() => {
    getTodaysCovidData();
    getView2();
    getView5();
    getView10();
    getCovidTable();
  }, []);

  function showCovidPatients() {
    setShowCP(true);
    setShowCR(false);
    setShowHR(false);
  }

  function showCovidRisk() {
    setShowCP(false);
    setShowCR(true);
    setShowHR(false);
  }

  function showHeartRisk() {
    setShowCP(false);
    setShowCR(false);
    setShowHR(true);
  }

  const hrpid = heartRisk.map(hr => hr.patient_ID);
  const hrp = patientTable.filter(p => hrpid.includes(p.patient_ID));

  return (
    <div className="covidCounter grid-1-1">
      Total Covid-19 Cases in Canada: {totalCases}
      <p>Today: {newCases} </p>

      <button onClick={showCovidPatients}>Covid Patients</button>
      <button onClick={showCovidRisk}>Covid Risk Patients</button>
      <button onClick={showHeartRisk}>Heart Risk Patients</button>
      
      {showCP && <Covidcases cp={covidPatients} />}
      {showCR && <Covidrisk cr={covidRisk} />}
      {showHR && <Heartrisk hr={hrp} />}
    </div>
  );
};

export default Covid;

import React, { useState, useEffect } from 'react';
import covidServices from '../services/covidServices';
import viewServices from '../services/viewServices';

const Covid = () => {
  const [totalCases, setTotalCases] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [covidPatients, setCovidPatients] = useState([]);
  const [covidRisk, setCovidRisk] = useState([]);
  const [heartRisk, setHeartRisk] = useState([]);

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

  useEffect(() => {
    getTodaysCovidData();
    getView2();
    getView5();
    getView10();
  }, []);


  /*
  const todaysData = allCovidData.slice(Math.max(allCovidData.length - 13, 1));

  if (todaysData.length > 0 && totalCases === 0) {
    totalCases = todaysData.map(d => d.Cases).reduce((total, amt) => total + amt);
  }
  */

  return (
    <div className="covidCounter grid-1-1">
      Total Cases: {totalCases}
      <p>Today: {newCases} </p>
    </div>
  );
};

export default Covid;

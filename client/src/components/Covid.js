import React, { useState, useEffect } from 'react';
import covidServices from '../services/covidServices';

const Covid = () => {
  const [totalCases, setTotalCases] = useState(0);
  const [newCases, setNewCases] = useState(0);

  async function getTodaysCovidData() {
    const data = await covidServices.getCaseCount();
    const todaysTotal = data[data.length -1].Cases;
    setTotalCases(todaysTotal);
    setNewCases(todaysTotal - data[data.length -2].Cases);
  }


  useEffect(() => {
    getTodaysCovidData();
  }, []);


  /*
  const todaysData = allCovidData.slice(Math.max(allCovidData.length - 13, 1));

  if (todaysData.length > 0 && totalCases === 0) {
    totalCases = todaysData.map(d => d.Cases).reduce((total, amt) => total + amt);
  }
  */

  return (
    <div>
      Current total: {totalCases} cases
      <p>New Cases: {newCases} </p>
    </div>
  );
};

export default Covid;

import React, { useState, useEffect } from 'react';
import covidServices from '../services/covidServices';

const Covid = () => {
  const [allCovidData, setAllCovidData] = useState([]);

  async function getAllCovidData() {
    const data = await covidServices.getAllCases();
    setAllCovidData(data);
  }

  useEffect(() => {
    getAllCovidData();
  }, []);

  console.log(allCovidData.length);
  return (
    <div>
      Covid
    </div>
  );
};

export default Covid;

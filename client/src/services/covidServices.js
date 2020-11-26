// link to api endpoints
//https://documenter.getpostman.com/view/10808728/SzS8rjbc#9739c95f-ef1d-489b-97a9-0a6dfe2f74d8

import axios from 'axios';

// canada data per day
async function getCaseCount() {
  const res = await axios.get('https://api.covid19api.com/total/dayone/country/canada/status/confirmed');
  return res.data;
}

// global covid data
async function updateCovidData() {
  const url = 'http://localhost:5000/api/covid';
  const rawData = await axios.get('https://api.covid19api.com/summary');
  const data = rawData.data.Countries;
  const currentData = await axios.get(url);
  const updatedData = [];

  for(let i = 0; i < data.length; i++) {
    const d = data[i];
    const country = {
      country: d.Country,
      new_confirmed: d.NewConfirmed,
      total_confirmed: d.TotalConfirmed,
      new_deaths: d.NewDeaths,
      total_deaths: d.TotalDeaths,
      new_recovered: d.NewRecovered,
      total_recovered: d.TotalRecovered,
    }
    updatedData.push(country);
  }

  if (currentData.data.length === 0) {
    for(let i = 0; i < data.length; i++) {
      await axios.post(url, updatedData[i]);
    }
    const res = await axios.get(url);
    return res.data;
  }

  if (!(currentData.data[181].total_cases === updatedData[181].total_cases)) {
    await axios.delete(url);
    for(let i = 0; i < data.length; i++) {
      await axios.post(url, updatedData[i]);
    }
  }

  const res = await axios.get(url);
  return res.data;
}

export default { getCaseCount, updateCovidData };

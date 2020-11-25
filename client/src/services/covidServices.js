//https://documenter.getpostman.com/view/10808728/SzS8rjbc#9739c95f-ef1d-489b-97a9-0a6dfe2f74d8

// NOTE: this api doesn't have data for nunavut
import axios from 'axios';

async function getCaseCount() {
  const res = await axios.get('https://api.covid19api.com/total/dayone/country/canada/status/confirmed');
  return res.data;
}

// need to switch to the other endpoint:
// https://api.covid19api.com/summary
async function updateCovidData() {
  const url = 'http://localhost:5000/api/covid';
  const raw_data = await axios.get('https://api.covid19api.com/summary');
  const data = raw_data.data.Countries;

  await axios.delete(url);

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
    await axios.post(url, country);
  }

  const res = await axios.get(url);
  return res.data;
}

export default { getCaseCount, updateCovidData };

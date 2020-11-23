//https://documenter.getpostman.com/view/10808728/SzS8rjbc#9739c95f-ef1d-489b-97a9-0a6dfe2f74d8

// NOTE: this api doesn't have data for nunavut
import axios from 'axios';

async function getCaseCount() {
  const res = await axios.get('https://api.covid19api.com/total/dayone/country/canada/status/confirmed');
  return res.data;
}



export default { getCaseCount };

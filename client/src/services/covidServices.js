import axios from 'axios';
const allCasesURL = 'https://api.covid19api.com/country/canada/status/confirmed'

async function getAllCases() {
  const res = await axios.get(allCasesURL);
  return res.data;
}

export default { getAllCases };

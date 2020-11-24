import axios from 'axios';

async function getBillingTable() {
  const res = await axios.get('/api/tables/billing');
  return res.data;
}

async function getPatientsTable() {
  const res = await axios.get('/api/tables/patients');
  return res.data;
}

export default { getBillingTable, getPatientsTable }

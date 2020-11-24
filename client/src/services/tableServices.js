import axios from 'axios';

async function getBillingTable() {
  const res = await axios.get('/api/tables/billing');
  return res.data;
}

async function getPatientsTable() {
  const res = await axios.get('/api/tables/patients');
  return res.data;
}

async function getDoctorsTable() {
  const res = await axios.get('/api/tables/doctors');
  return res.data;
}

async function getNursesTable() {
  const res = await axios.get('/api/tables/nurses');
  return res.data;
}

async function getPatientVisitTable() {
  const res = await axios.get('/api/tables/patient-visit');
  return res.data;
}

export default { 
  getBillingTable,
  getPatientsTable,
  getDoctorsTable,
  getNursesTable,
  getPatientVisitTable
}

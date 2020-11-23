import axios from 'axios';

// the 10 views for the project
async function view1() {
  const res = await axios.get('/api/patients');
  return res.data;
}

async function view2() {
  const res = await axios.get('/api/covid-patients');
  return res.data;
}

async function view3() {
  const res = await axios.get('/api/large-total-billing');
  return res.data;
}

async function view4() {
  const res = await axios.get('/api/doctors-patients');
  return res.data;
}

async function view5() {
  const res = await axios.get('/api/covid-risk');
  return res.data;
}

async function view6() {
  const res = await axios.get('/api/multi-patient-doctors');
  return res.data;
}

async function view7() {
  const res = await axios.get('/api/outstanding-balance');
  return res.data;
}

async function view8() {
  const res = await axios.get('/api/open-rooms');
  return res.data;
}

async function view9() {
  const res = await axios.get('/api/multi-patient-nurses');
  return res.data;
}

async function view10() {
  const res = await axios.get('/api/heart-risk');
  return res.data;
}

export default { 
  view1,
  view2,
  view3,
  view4,
  view5,
  view6,
  view7,
  view8,
  view9,
  view10
};

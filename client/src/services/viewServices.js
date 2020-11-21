import axios from 'axios';

// need this for all 10 views
async function view1() {
  const res = await axios.get('/api/patients');
  const d = res.data;
  return d;
}

async function view2() {
  const res = await axios.get('/api/covid-patients');
  const d = res.data;
  return d;
}

async function view3() {
  const res = await axios.get('/api/large-total-billing');
  const d = res.data;
  return d;
}

async function view4() {
  const res = await axios.get('/api/doctors-patients');
  const d = res.data;
  return d;
}

async function view5() {
  const res = await axios.get('/api/covid-risk');
  const d = res.data;
  return d;
}

async function view6() {
  const res = await axios.get('/api/multi-patient-doctors');
  const d = res.data;
  return d;
}

async function view7() {
  const res = await axios.get('/api/outstanding-balance');
  const d = res.data;
  return d;
}

async function view8() {
  const res = await axios.get('/api/open-rooms');
  const d = res.data;
  return d;
}

async function view9() {
  const res = await axios.get('/api/multi-patient-nurses');
  const d = res.data;
  return d;
}

async function view10() {
  const res = await axios.get('/api/heart-risk');
  const d = res.data;
  return d;
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

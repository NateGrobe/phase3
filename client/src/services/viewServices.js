import axios from 'axios';

// need this for all 10 views
async function view1() {
  const res = await axios.get('/api/patients');
  const d = res.data;
  return d;
}

export default { view1 };

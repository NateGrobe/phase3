import axios from 'axios';

async function getBillingTable() {
  const res = await axios.get('/api/tables/billing');
  return res.data;
}

export default { getBillingTable }

import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';

const Billing = () => {
  const [largeBalance, setLargeBalance] = useState([]);
  const [oustandingBalance, setOustandingBalance] = useState([]);

  async function getView3() {
    const res = await viewServices.view3();
    setLargeBalance(res.data);
  }

  async function getView7() {
    const res = await viewServices.view7();
    setOustandingBalance(res.data);
  }

  useEffect(() => {
    getView3();
    getView7();
  }, []);

  // need to get all data from the billing table to properly display

  return (
    <div className="font">
      BILLING
    </div>
  );
};

export default Billing;

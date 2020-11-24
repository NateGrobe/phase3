import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';

const Billing = () => {
  const [largeBalance, setLargeBalance] = useState([]);
  const [outstandingBalance, setOutstandingBalance] = useState([]);
  const [billingTable, setBillingTable] = useState([]);

  async function getView3() {
    const res = await viewServices.view3();
    setLargeBalance(res);
  }

  async function getView7() {
    const res = await viewServices.view7();
    setOutstandingBalance(res);
  }

  async function getBillingTable() {
    const res = await tableServices.getBillingTable();
    setBillingTable(res);
  }

  useEffect(() => {
    getView3();
    getView7();
    getBillingTable();
  }, []);

  const lb = largeBalance.map(lb => lb.patient_ID);
  const ob = outstandingBalance.map(ob => ob.patient_ID);

  return (
    <div className="font">
      BILLING

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Services</th>
            <th>Total Price</th>
            <th>Outstanding Balance</th>
          </tr>
        </thead>
        <tbody>
          {billingTable.map(bill =>
            <tr key={bill.billing_ID}>
              <td>{bill.patient_ID}</td>
              <td>{bill.services}</td>
              <td>{bill.price_Total}</td>
              <td>{bill.outstanding_Balance}</td>
            </tr>
          )}
        </tbody>
    </table>
    </div>
  );
};

export default Billing;

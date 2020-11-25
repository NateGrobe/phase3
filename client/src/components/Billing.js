import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';

const Billing = () => {
  const [largeBalance, setLargeBalance] = useState([]);
  const [outstandingBalance, setOutstandingBalance] = useState([]);
  const [billingTable, setBillingTable] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [patientsTable, setPatientsTable] = useState([]);

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
    setFilteredBills(res);
  }

  async function getPatientsTable() {
    const res = await tableServices.getPatientsTable();
    setPatientsTable(res);
  }

  useEffect(() => {
    getView3();
    getView7();
    getBillingTable();
    getPatientsTable();
  }, []);

  function showAllBills() {
    setFilteredBills(billingTable);
  }

  function filterLB() {
    const lb = largeBalance.map(lb => lb.patient_ID);
    const fb = billingTable.filter(bill => lb.includes(bill.patient_ID));
    setFilteredBills(fb)
  }

  function filterOB() {
    const ob = outstandingBalance.map(ob => ob.patient_ID);
    const fb = billingTable.filter(bill => ob.includes(bill.patient_ID));
    setFilteredBills(fb)
  }

  if (patientsTable.length === 0 && billingTable.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <div className="font">
      <h3>BILLING</h3>
      <br/>
      <br/>
      <button onClick={showAllBills}>All</button>
      <button onClick={filterLB}>Large Balances</button>
      <button onClick={filterOB}>Outstanding Balances</button>
      <br/>
      <br/>
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
          {filteredBills.map(bill =>
            <tr key={bill.billing_ID}>
              <td>{bill.patient_ID}</td>
              <td>{bill.services}</td>
              <td>${bill.price_Total}</td>
              <td>${bill.oustanding_Balance}</td>
            </tr>
          )}
        </tbody>
    </table>
    </div>
  );
};

export default Billing;

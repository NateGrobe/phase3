import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';

const Employees = () => {
  const [docPatients, setDocPatients] = useState([]);
  const [busyDocs, setBusyDocs] = useState([]);
  const [busyNurses, setBusyNurses] = useState([]);
  const [openRooms, setOpenRooms] = useState([]);

  async function getView4() {
    const res = await viewServices.view4();
    console.log(res);
    setDocPatients(res.data);
  }

  /*
  async function getView6() {
    const res = await viewServices.view6();
    setBusyNurses(res.data);
  }

  async function getView8() {
    const res = await viewServices.view8();
    setOpenRooms(res.data);
  }

  async function getView9() {
    const res = await viewServices.view9();
    setBusyNurses(res.data);
  }
  */

  useEffect(() => {
    getView4();
    /*
    getView6();
    getView8();
    getView9();
    */
  }, []);

  return (
    <div className="font">
      EMPLOYEES
    </div>
  );
};

export default Employees;

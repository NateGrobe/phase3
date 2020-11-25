import React, { useState, useEffect } from 'react';
import viewServices from '../services/viewServices';
import tableServices from '../services/tableServices';
import DocPatients from './DocPatients';
import Allstaff from './Allstaff';
import Busystaff from './Busystaff';

const Employees = () => {
  const [docTable, setDocTable] = useState([]);
  const [nurseTable, setNurseTable] = useState([]);
  const [docPatients, setDocPatients] = useState([]);
  const [busyDocs, setBusyDocs] = useState([]);
  const [busyNurses, setBusyNurses] = useState([]);
  const [openRooms, setOpenRooms] = useState([]);
  const [bp, setBp] = useState(false);
  const [showAS, setShowAS] = useState(true);
  const [showBS, setShowBS] = useState(false);

  // move this to patients page
  async function getView4() {
    const res = await viewServices.view4();
    setDocPatients(res);
  }

  async function getDocTable() {
    const res = await tableServices.getDoctorsTable();
    setDocTable(res);
  }

  async function getNurseTable() {
    const res = await tableServices.getNursesTable();
    setNurseTable(res);
  }

  async function getView6() {
    const res = await viewServices.view6();
    setBusyDocs(res);
  }

  async function getView8() {
    const res = await viewServices.view8();
    setOpenRooms(res);
  }

  async function getView9() {
    const res = await viewServices.view9();
    setBusyNurses(res);
  }

  useEffect(() => {
    getView4();
    getView6();
    getView8();
    getView9();
    getDocTable();
    getNurseTable();
  }, []);

  function showAllStaff() {
    setShowAS(true);
    setShowBS(false);
    setBp(false);
  }

  function showBusyStaff() {
    setShowAS(false);
    setShowBS(true);
    setBp(false);
  }

  function showDocPat() {
    setShowAS(false);
    setShowBS(false);
    setBp(true);
  }

  return (
    <div className="font">
      EMPLOYEES
      <br/>
      <br/>
      <button onClick={showAllStaff}>All Staff</button>
      <button onClick={showBusyStaff}>Busy Staff</button>
      <button onClick={showDocPat}>Doctors By Patient</button>

    
      {showAS && <Allstaff dt={docTable} nt={nurseTable} />}
      {showBS && <Busystaff dt={docTable} nt={nurseTable} bd={busyDocs} bn={busyNurses} />}
      {bp && <DocPatients dp={docPatients} />}

      <br/>
      <br/>
      <br/>
      Open Rooms
      <table id="openRooms">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {openRooms.map(room =>
            <tr key={room.room_ID}>
              <td>{room.room_ID}</td>
              <td>{room.room_Type}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;

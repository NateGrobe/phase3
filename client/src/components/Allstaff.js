import React from 'react';

const Allstaff = ({ dt, nt }) => {
  return (
    <div>
      <h3>Doctors</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {dt.map(d =>
          <tr key={d.doctor_ID}>
            <td>{d.doctor_Name}</td>
            <td>{d.doctor_Type}</td>
          </tr>
          )}
        </tbody>
      </table>

      <h3>Nurses</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {nt.map(n =>
          <tr key={n.nurse_ID}>
            <td>{n.nurse_Name}</td>
            <td>{n.nurse_Type}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Allstaff;

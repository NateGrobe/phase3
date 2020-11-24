import React from 'react';

const Covidcases = ({ cp }) => {
  return (
    <div>
      <h3>Our Covid Cases</h3>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor ID</th>
          </tr>
        </thead>
        <tbody>
          {cp.map(p =>
          <tr key={p.patient_ID}>
            <td>{p.patient_fName} {p.patient_lName}</td>
            <td>{p.doctor_ID}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covidcases;

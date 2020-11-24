import React from 'react';

const Covidrisk = ({ cr }) => {
  return (
    <div>
      <h3>Covid Risk Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor ID</th>
          </tr>
        </thead>
        <tbody>
          {cr.map(p =>
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

export default Covidrisk;

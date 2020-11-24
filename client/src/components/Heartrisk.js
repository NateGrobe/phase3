import React from 'react';

const Heartrisk = ({ hr }) => {
  return (
    <div>
      <h3>Heart Risk Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor ID</th>
          </tr>
        </thead>
        <tbody>
          {hr.map(p =>
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

export default Heartrisk;

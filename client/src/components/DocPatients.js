import React from 'react';

const DocPatients = ({ dp }) => {
  return (
    <div>
      <h3>Doctors By Patient</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Specialty</th>
          <th>Patient</th>
        </tr>
      </thead>
      <tbody>
        {dp.map((d,i) =>
          <tr key={i}>
            <td>{d.doctor_Name}</td>
            <td>{d.doctor_Type}</td>
            <td>{d.patient_fName || "N/A"} {d.patient_lName}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default DocPatients;

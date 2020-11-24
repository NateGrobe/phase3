import React from 'react';

const DocPatients = ({ dp }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Specialty</td>
          <td>Patient</td>
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
  );
};

export default DocPatients;

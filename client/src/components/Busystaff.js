import React from 'react';

const Busystaff = ({ dt, nt, bd, bn }) => {

  const bdid = bd.map(d => d.doctor_id);
  const busyDocs = dt.filter(d => bdid.includes(d.doctor_ID));

  const bnid = bn.map(n => n.nurse_ID);
  const busyNurses = nt.filter(n => bnid.includes(n.nurse_ID));

  // not sure I like the appearance of this table but I guess it could be worse
  return (
    <div>
      <h3>Doctors</h3>
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Speciaty</th>
        </tr>
      </thead>
      <tbody>
        {busyDocs.map(bd =>
        <tr key={bd.doctor_ID}>
          <td>{bd.doctor_Name}</td>
          <td>{bd.doctor_Type}</td>
        </tr>
        )}
      </tbody>
    </table>
    <h3>Nurses</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Speciaty</th>
        </tr>
      </thead>
      <tbody>
        {busyNurses.map(bn =>
        <tr key={bn.nurse_ID}>
          <td>{bn.nurse_Name}</td>
          <td>{bn.nurse_Type}</td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default Busystaff;

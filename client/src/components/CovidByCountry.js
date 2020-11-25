import React from 'react';

const CovidByCountry = ({ cd }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>New Confirmed</th>
          <th>Total Confirmed</th>
          <th>New Deaths</th>
          <th>Total Deaths</th>
          <th>New Recovered</th>
          <th>Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        {cd.map(c => 
        <tr key={c.country}>
          <td>{c.country}</td>
          <td>{c.new_confirmed}</td>
          <td>{c.total_confirmed}</td>
          <td>{c.new_deaths}</td>
          <td>{c.total_deaths}</td>
          <td>{c.new_recovered}</td>
          <td>{c.total_recovered}</td>
        </tr>
        )}
      </tbody>
    </table>
  );
};

export default CovidByCountry;

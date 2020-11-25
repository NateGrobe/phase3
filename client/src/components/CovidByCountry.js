import React from 'react';

const CovidByCountry = ({ cd }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Country</td>
          <td>New Confirmed</td>
          <td>Total Confirmed</td>
          <td>New Deaths</td>
          <td>Total Deaths</td>
          <td>New Recovered</td>
          <td>Total Recovered</td>
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

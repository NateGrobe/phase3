import React, { useState } from 'react';

const CovidByCountry = ({ cd }) => {
  const [covidFilter, setCovidFilter] = useState('');
  const fcd = cd.filter(d =>
  d.country.toUpperCase().includes(covidFilter.toUpperCase()));

  return (
    <div>
      <h3>Global Covid Data</h3>
      <input value={covidFilter} placeholder="Search" type="text" onChange={({ target }) => setCovidFilter(target.value)} />
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
          {fcd.map(c => 
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
    </div>
  );
};

export default CovidByCountry;

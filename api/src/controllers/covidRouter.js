const covidRouter = require('express').Router();
const sql = require('../db.js');

const Country = function(c) {
  this.country = c.country;
  this.new_confirmed = c.new_confirmed;
  this.total_confirmed = c.total_confirmed;
  this.new_deaths = c.new_deaths;
  this.total_deaths = c.total_deaths;
  this.new_recovered = c.new_recovered;
  this.total_recovered = c.total_recovered;
};

covidRouter.get('/', (req, res) => {
  sql.query(`
    SELECT * FROM hospital_data.covid`,
  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

covidRouter.delete('/', (req, res) => {
  sql.query('DELETE FROM hospital_data.covid', (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

covidRouter.post('/', (req, res) => {
  const body = req.body;

  if(!body) {
    res.status(400).send({
      message: 'content can not be empty'
    });
  }

  const country = new Country({
    country: body.country,
    new_confirmed: body.new_confirmed,
    total_confirmed: body.total_confirmed,
    new_deaths: body.new_deaths,
    total_deaths: body.total_deaths,
    new_recovered: body.new_recovered,
    total_recovered: body.total_recovered
  });

  sql.query('INSERT INTO hospital_data.covid SET ?', country, (err, result) => {
    if (err) throw err;
    res.send(country);
  });
});

module.exports = covidRouter;

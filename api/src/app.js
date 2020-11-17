const express = require('express');
const app = express();

const patientRouter = require('./controllers/patientRouter');

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.use('/api/patients', patientRouter);

module.exports = app;

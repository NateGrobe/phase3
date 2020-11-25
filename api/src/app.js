const express = require('express');
const cors = require('cors');
const app = express();

const viewRouter = require('./controllers/viewRouter');
const tableRouter = require('./controllers/tableRouter');
const covidRouter = require('./controllers/covidRouter');

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.use(express.json());
app.use(cors());

app.use('/api', viewRouter);
app.use('/api/covid', covidRouter);
app.use('/api/tables', tableRouter);

module.exports = app;

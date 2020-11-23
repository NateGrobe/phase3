const express = require('express');
const app = express();

const viewRouter = require('./controllers/viewRouter');
const tableRouter = require('./controllers/tableRouter');

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.use('/api', viewRouter);
app.use('/api/tables', tableRouter);

module.exports = app;

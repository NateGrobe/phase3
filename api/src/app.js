const express = require('express');
const app = express();

const viewRouter = require('./controllers/viewRouter');

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.use('/api', viewRouter);

module.exports = app;

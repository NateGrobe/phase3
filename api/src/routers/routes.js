module.exports = app => {
  const patients = require('../controllers/controllers');

  app.get('/patients', patients.findAll);
};

const http = require('http');
const config = require('./utils/config');
const app = require('./app');
const PORT = config.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/* eslint-disable no-console */
const http = require('http');
const app = require('./app');

const port = 8000;

http
  .createServer(app.callback())
  .listen(port, (err) => ((err)
    ? console.error('Error in running server', err)
    : console.log(`Server running on port ${port}`)));

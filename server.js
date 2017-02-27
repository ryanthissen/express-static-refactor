const express = require('express');
const nodemon = require('nodemon');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));

app.use(express.static(__dirname));

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log('App is listening on port 8080!' );
});

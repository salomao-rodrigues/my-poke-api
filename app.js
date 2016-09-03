'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

/*
@todo: get correct hostnames to avoid CORS issues
 */
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/auth', routes.auth);

app.listen(8081, function () {
  console.log('My Poke Web server listening on port 8081!');
});

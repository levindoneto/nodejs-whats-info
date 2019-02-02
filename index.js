let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let functions = require('./app/actions/functions')
const config = require('config');
const PORT = config.get("server.port");


app.listen(PORT);

console.log('App is now running on port ', PORT);

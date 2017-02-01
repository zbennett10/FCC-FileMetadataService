var express = require('express');
var apiRoute = require('./routes/api');

var app = express();

//set view engine
app.set('view engine', 'pug');

//middleware
app.use('/', apiRoute);

//start server
var port = process.env.PORT || 3000;
app.listen(port);
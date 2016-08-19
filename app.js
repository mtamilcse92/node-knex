var express = require('express');
var app = express();
var port = 3000;
var crud = require('./crud/operation');
var database = require('./crud/data/database');
var dbs = require('./crud/data/db');

database.database();
app.use('/', crud);
app.listen(port);
console.log("server is running...");
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const routers = require('../routers')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(routers);

module.exports = app;
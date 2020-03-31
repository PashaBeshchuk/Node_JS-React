const express = require('express');
const path = require('path');
const cons = require('consolidate');
const bodyParser = require('body-parser');
const app = express();
const routers = require('../routers')
// For pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
// For html
// app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, '../node_js-react/public'));
// app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routers);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('X-Requested-With', 'XMLHttpRequest');
//     res.header('Access-Control-Allow-Headers', 
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(res.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });


module.exports = app;
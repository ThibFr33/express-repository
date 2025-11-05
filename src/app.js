//import du paquet express et des autres
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
//créee l'application express
const app = express();
//parsing
app.use(express.json());
app.use(cors());
//log les requêtes http
app.use(morgan("dev"));
//chercher toutes mes routes (sous la route /api)
app.use('/api', router);

//export app
module.exports = app;
//import du paquet express
const express = require('express');
//créee l'application express
const app = express();
const morgan = require('morgan');
//middlewares
app.use(express.json());
app.use(morgan());
//export app
app.get('/test', (req, res) =>{
    console.log('route test victor');
    res.send('test de la route ok !');
})
module.exports = app;
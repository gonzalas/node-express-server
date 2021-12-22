const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Import Routes
const userRoutes = require('./api/users/routes/index');

// Middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));


// Use Routes
app.use(userRoutes);



module.exports = app;
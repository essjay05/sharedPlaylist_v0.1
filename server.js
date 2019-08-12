// Require dotenv config
require('dotenv').config();

// Require constants
const
    express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 8888;

// Connect database
require('./db/mongoose');

// Middleware

// Routes
// Home route
app.get('/', ( req, res ) => {
    res.json({ success: true })
})
// API Root route
app.get('/api', ( req, res ) => {
    res.json({ message: `API Root Route`})
})

// Listening PORT
app.listen(PORT, err => {
    console.log( err || `Server listening on PORT ${PORT}`)
})
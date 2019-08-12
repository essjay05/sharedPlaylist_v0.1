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
app.use(express.json());


// Routes
    // Home route
    app.get('/', ( req, res ) => {
        res.json({ success: true })
    })
    // API Root route
    app.get('/api', ( req, res ) => {
        res.json({ message: `API Root Route`})
    })
    // Users Router
    const usersRouter = require('./routes/usersRouter.js');
    app.use('/users', usersRouter);

// Listening PORT
app.listen(PORT, err => {
    console.log( err || `Server listening on PORT ${PORT}`)
})
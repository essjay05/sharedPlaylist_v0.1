// Require express and Routers
const
    express = require('express'),
    usersRouter = new express.Router(),
    User = require('../models/User');

// Render Login View
    // usersRouter.get('/login', ( req, res) => {
    //     res.render('index', { message: req.flash('loginMessage') })
    // })
// Authenticate Login

// Render Sign up View

// Authenticate Sign up / CREATE User:
usersRouter.post('/signup', async ( req, res ) => {
    console.log(req.body);

    let user = new User ({ 
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    } catch (err) {
        res.status(404).send(err);
        console.log(err);
    }
})

// Show profile (MUST BE LOGGED IN [Read 1]):
// usersRouter.post('/login', async ( req, res ) => {
//     console.log(`Finding user ${req.body.email} for login.`);

//     try {
//         const user = await user.findByCredentials(req.body.email, req.body.password);
//             console.log(`This is my found user: ${user}`);
//         const createdToken = await user.generateAuthToken();
        
//         res.status(200).Headers('x-auth', createdToken).send(user);
//     } catch(error) {
//         res.status(400).RTCDtmfSender({ errorMsg: error });
//         console.log(error);
//     }
// })

// Show all profiles (Must be logged in [INDEX All Users]):

// Render form to Edit profile

// Update profile [UPDATE User]:

// Log Out

// Delete User Profile [DESTROY USER]


// Middleware to authenticate logged in:

// Make exportable
module.exports = usersRouter;
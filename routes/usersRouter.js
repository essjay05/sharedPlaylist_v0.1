// Require express and Routers
const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users'),
    User = require('../models/User');

// Render Login View
    // usersRouter.get('/login', ( req, res) => {
    //     res.render('index', { message: req.flash('loginMessage') })
    // })
// Authenticate Login

// Render Sign up View

// Authenticate Sign up / CREATE User:
usersRouter.post('/signup', usersCtrl.create);

// Show profile (MUST BE LOGGED IN [Read 1]):
// usersRouter.post('/login', async ( req, res ) => {
//     console.log(`Finding user ${req.body.email} for login.`);

//     try {
//         const user = await user.findByCredentials(req.body.email, req.body.password);
//             console.log(`This is my found user: ${user}`);
//         const createdToken = await user.generateAuthToken();
        
//         res.status(200).Headers('x-auth', createdToken).send(user);
//     } catch(error) {
//         res.status(400).send({ errorMsg: error });
//         console.log(error);
//     }
// })

// Show all profiles (Must be logged in [INDEX All Users]):
usersRouter.get('/', usersCtrl.index);

// Show 1 profile (Must be logged in):
usersRouter.get('/:id', usersCtrl.show);

// Render form to Edit profile

// Update profile [UPDATE User]:
usersRouter.patch('/:id/edit', usersCtrl.update);

// Log Out

// Delete User Profile [DESTROY USER]
usersRouter.delete('/:id/edit', usersCtrl.destroy);


// Middleware to authenticate logged in:

// Make exportable
module.exports = usersRouter;

// const
//     express = require('express'),
//     usersRouter = new express.Router(),
//     usersCtrl = require('../controllers/users.js'),
//     verifyToken = require('../serverAuth').verifyToken;

// usersRouter.get('/', usersCtrl.index);
// usersRouter.post('/', usersCtrl.create);
// usersRouter.post('/authenticate', usersCtrl.authenticate);

// usersRouter.use(verifyToken);
// usersRouter.get('/:id', usersCtrl.show);
// usersRouter.patch('/:id', usersCtrl.update);
// usersRouter.delete('/:id', usersCtrl.destroy);

// module.exports = usersRouter;
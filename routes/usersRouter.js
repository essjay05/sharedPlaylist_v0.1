// Require express and Routers
const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users'),
    authenticate = require('../middleware/authenticate'),
    User = require('../models/User');

// User CRUD functions:
    // Authenticate Sign up / CREATE User:
    usersRouter.post('/signup', usersCtrl.create);
    // Show all profiles (Must be logged in [INDEX All Users]):
    usersRouter.get('/', usersCtrl.index);
    // Show 1 profile (Must be logged in):
    usersRouter.get('/:id', usersCtrl.show);
    // Update profile [UPDATE User]:
    usersRouter.patch('/:id/edit', usersCtrl.update);
    // Delete User Profile [DESTROY USER]
    usersRouter.delete('/:id/edit', usersCtrl.destroy);

// User login / logout functions and authenticate with token:
    // User login and give auth token
    usersRouter.post('/login', async ( req, res ) => {
        console.log(`Finding user ${req.body.email} to login`)

        try {
            const user = await User.findByCredentials( req.body.email, req.body.password );
                console.log(`Login... this is my found user: ${user}`);
            const createdToken = await user.signToken();
                console.log(`${user.email} is successfully logged in and given an auth token`)
            
            res.status(200).header('x-auth', createdToken).send(user);
        } catch (err) {
            console.log(`ERROR: invalid credentials`);
            res.status(400).send({ errorMsg: err, message: `ERROR: invalid credentials. Access denied.`})
        }
    })
// Render USER Views:
// Login View
    // usersRouter.get('/login', ( req, res) => {
    //     res.render('index', { message: req.flash('loginMessage') })
    // })
// Authenticate Login

// Render Sign up View

// Render form to Edit profile

// Show profile (MUST BE LOGGED IN [Read 1]):
// usersRouter.post('/login', async ( req, res ) => {
//     console.log(`Finding user ${req.body.email} for login.`);

//     try {
//         const user = await user.findByCredentials(req.body.email, req.body.password);
//             console.log(`This is my found user: ${user}`);
//         const createdToken = await user.signToken();
        
//         res.status(200).Headers('x-auth', createdToken).send(user);
//     } catch(error) {
//         res.status(400).send({ errorMsg: error });
//         console.log(error);
//     }
// })

// Log Out






// Make exportable
module.exports = usersRouter;

// const
//     express = require('express'),
//     usersRouter = new express.Router(),
//     usersCtrl = require('../controllers/users.js'),
//     verifyToken = require('../serverAuth').verifyToken;

// usersRouter.get('/', usersCtrl.index); DONE
// usersRouter.post('/', usersCtrl.create); DONE
// usersRouter.post('/authenticate', usersCtrl.authenticate);

// usersRouter.use(verifyToken);
// usersRouter.get('/:id', usersCtrl.show); DONE
// usersRouter.patch('/:id', usersCtrl.update); DONE
// usersRouter.delete('/:id', usersCtrl.destroy); DONE

// module.exports = usersRouter;
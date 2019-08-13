// Require express and Routers
const
    express = require('express'),
    usersRouter = new express.Router(),
    // usersCtrl = ('../controllers/users'),
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
usersRouter.get('/', async ( req, res ) => {
    console.log(`Finding ALL users in database.`);
    const users = await User.find({});
    res.status(200).send(users);
    console.log(`Here's the full list of #${users.length} users: ${users}`);
});
// Render form to Edit profile

// Update profile [UPDATE User]:
usersRouter.patch('/:id/edit', async ( req, res ) => {
    console.log(`User to be updated: ${req.params.id}`)

    try {
        const foundUser = await User.findOneAndUpdate({_id: req.params.id}, 
            {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password
            });
        const updatedUser = await foundUser.save();
        res.status(200).send(`Successfully updated: ${foundUser} to ${updatedUser}`);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    } 
});

// Log Out

// Delete User Profile [DESTROY USER]
usersRouter.delete('/:id/edit', async ( req, res ) => {
    console.log(`Finding user id# ${req.params.id} to delete`);
    try {
        const foundUser = await User.findOneAndDelete({ _id: req.params.id });
        const deletedUser = await foundUser.save();
        res.status(200).send(`Successfully deleted: ${deletedUser}`);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }   
});


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
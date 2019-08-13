// Require User Model and signToken
const 
    User = require('../models/User.js');
    // signToken = require('../serverAuth').signToken;

// Make controllers exportable
module.exports = {
    create: async ( req, res ) => {
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
    },
    index: async ( req, res ) => {
        console.log(`Finding ALL users in database.`);
        try {
            const users = await User.find({});
            res.status(200).send(users);
            console.log(`Here's the total list of ${users.length} many users: ${users}`);
        } catch(err) {
            res.status(400).send({ errorMsg: error });
            console.log(error);
        }
    }
    // show: {

    // },
    // update: {

    // },
    // destroy: {

    // }
}
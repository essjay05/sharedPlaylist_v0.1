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
    }
    // index: {

    // },
    // show: {

    // },
    // update: {

    // },
    // destroy: {

    // }
}
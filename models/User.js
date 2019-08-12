// Require mongoose, jwt, and bcrypt to create model
const
    mongoose = require('mongoose');
    // jwt = require('jsonwebtoken'),
    // bcrypt = require('bcryptjs');

// Create new UserSchema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true
    },
    firstName: {
        type: String,
        minlength: 1
    },
    lastName: {
        type: String,
        minlength: 1
    },
    username: {
        type: String,
        minlength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }   
}, { timestamps: true })

// Custom Methods/Statics

// Make Exportable
const User = mongoose.model('User', UserSchema);
module.exports = User;
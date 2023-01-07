const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

userSchema.statics.signIn = async function (email, password, role, firstname, lastname) {
    if (!email || !password) {
        throw Error('Both fields must be filled.')
    }
    if (!(validator.isEmail(email))) {
        throw Error('Invalid Email.')
    }
    if (!(validator.isStrongPassword(password))) {
        throw Error('Password not strong enough.')
    }
    const exists = await this.findOne({
        email
    }) //function not arrow cuz we need to use the this keyword
    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash,
        role,
         firstname, lastname
    })

return user;
}

userSchema.statics.logIn = async function (email, password) {
    if (!email || !password) {
        throw Error('Both fields must be filled.')
    }

    const user = await this.findOne({
        email
    })
    if (!user) {
        throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect password')
    }

    return user;
}

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
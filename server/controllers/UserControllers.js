const userModel = require("../models/userModel.js");
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({
        _id
    }, process.env.SECRET, {
        expiresIn: '1d'
    })
}

const logInUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await userModel.logIn(email, password)
        const token = createToken(user._id);
        console.log(user);
        res.send({
            user
        })
    } catch (err) {
        res.status(404).send({
            err: err.message
        })
    }
}

const signInUser = async (req, res) => {
    const {
        email,
        password,
        role, firstname, lastname
    } = req.body;
    console.log(req.body);
    try {
        const user = await userModel.signIn(email, password, role, firstname, lastname);
        const token = createToken(user._id);
        console.log(user);
        res.send({
            user
        });
    } catch (err) {
        res.status(404).send({
            err: err.message
        })
    }
}

module.exports = {
    logInUser,
    signInUser
}
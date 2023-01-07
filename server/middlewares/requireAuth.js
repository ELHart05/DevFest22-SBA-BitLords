const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).send({err: 'Auth Token Required'})
    }

    const token = authorization.split(' ')[1];

    try{
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await userModel.findOne({ _id }).select('_id');
        next()
    }
    catch (error){
        res.status(401).send({err: 'Request Is Not Authorized'})
    }
}

module.exports = requireAuth;
const { Router } = require('express');
const { logInUser, signInUser } = require('../controllers/userControllers.js');
const requireAuth = require('../middlewares/requireAuth.js');

const router = Router();

//require auth for all routes

router.post('/login', logInUser)

router.post('/signin', signInUser)

module.exports = router;
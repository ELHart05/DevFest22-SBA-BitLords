const { Router } = require("express");
const { getAllNotifications, newNotification, editNotification, deleteNotification } = require("../controllers/notificationControllers.js");
const requireAuth = require('../middlewares/requireAuth.js');

const router = Router();

//require auth for all routes
//router.use(requireAuth)

router.get('/', getAllNotifications);

router.post('/new', newNotification);

router.patch('/edit/:id', editNotification);

router.delete('delete/:id', deleteNotification);

module.exports = router;
const { Router } = require("express");
const { getAllEvents, newEvent, editEvent, deleteEvent } = require("../controllers/eventControllers.js");
const requireAuth = require('../middlewares/requireAuth.js');
const multer = require('multer')
const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });

const router = Router();

//require auth for all routes
//router.use(requireAuth)

router.get('/', getAllEvents);

router.post('/new',upload.single('file'), newEvent);

router.patch('/edit/:id', editEvent);

router.delete('/delete/:id', deleteEvent);

module.exports = router;
const { Router } = require("express");
const { getAllWorkshops, newWorkshop, editWorkshop, deleteWorkshop } = require("../controllers/workshopControllers.js");
const requireAuth = require('../middlewares/requireAuth.js');
const multer = require('multer')
const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });

const router = Router();

//require auth for all routes
//router.use(requireAuth);

router.get('/', getAllWorkshops);

router.post('/new',upload.single('file'), newWorkshop);

router.patch('/edit/:id', editWorkshop);

router.delete('/delete/:id', deleteWorkshop);

module.exports = router;
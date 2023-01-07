const { Router } = require("express");
const { getAllDoctors, newDoctor, editDoctor, deleteDoctor } = require("../controllers/doctorControllers.js");
const requireAuth = require('../middlewares/requireAuth.js');
const multer = require('multer')
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

const router = Router();

//require auth for all routes
//router.use(requireAuth)

router.get('/', getAllDoctors);

router.post('/new',upload.single('file'), newDoctor);

router.patch('/edit/:id', editDoctor);

router.delete('delete/:id', deleteDoctor);

module.exports = router;
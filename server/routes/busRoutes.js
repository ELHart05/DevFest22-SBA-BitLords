const { Router } = require("express");
const { getAllBuses, newBus, editBus, deleteBus } = require("../controllers/busControllers.js");
const requireAuth = require('../middlewares/requireAuth.js');

const router = Router();

//require auth for all routes
//router.use(requireAuth)

router.get('/', getAllBuses);

router.post('/new', newBus);

router.patch('/edit/:id', editBus);

router.delete('delete/:id', deleteBus);

module.exports = router;
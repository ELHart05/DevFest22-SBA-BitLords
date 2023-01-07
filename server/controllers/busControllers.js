const busModel = require('../models/busModel.js');

const getAllBuses = (req, res) => {
    busModel.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(40).send({ err: err.message })
        })
}

const newBus = (req, res) => {
   
    const { events } = req.body;
    busModel.deleteMany({})
    const newBus = busModel({ events: events });
    newBus.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}

const editBus = (req, res) => {
    const { id } = req.params;
    const { events } = req.body;

    busModel.findByIdAndUpdate(id, { events: events })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}

const deleteBus = (req, res) => {
    const { id } = req.params;
    busModel.findByIdAndRemove(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}


module.exports = {
    getAllBuses,
    newBus,
    editBus,
    deleteBus
}
const notificationModel = require('../models/notificationModel.js');

const getAllNotifications = (req, res) => {
    notificationModel.find().sort({createdAt: -1})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(40).send({err: err.message})
    })
}

const newNotification = (req, res) => {
    const { title, date } = req.body;

    const newNotification = notificationModel({ title, date });

    newNotification.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(400).send({err: err.message})
    })
}

const editNotification = (req, res) => {
    const { id } = req.params;

    const { title, date } = req.body;
    
    if (!isValidObjectId(id)) {
        res.status(404).send({err: "no such Notifications"})
        return;
    }
    if (!req.body.length){
        res.status(404).send({err: "no details detected"})
        return;
    }
    notificationModel.findByIdAndUpdate(id, {title, date})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(400).send({err: err.message})
    })
}

const deleteNotification = (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        res.status(404).send({err: "no such Notifications"})
        return;
    }
    notificationModel.findByIdAndRemove(id)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.status(400).send({err: err.message})
    })
}


module.exports = {
    getAllNotifications,
    newNotification,
    editNotification,
    deleteNotification
}
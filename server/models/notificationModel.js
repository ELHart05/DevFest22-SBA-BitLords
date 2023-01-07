const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const notificationModel = mongoose.model('notifications', notificationSchema);

module.exports = notificationModel;
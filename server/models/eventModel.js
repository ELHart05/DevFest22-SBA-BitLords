const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        default : false
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url:{
        type:String
    }
})

const eventModel = mongoose.model('events', eventSchema);

module.exports = eventModel;
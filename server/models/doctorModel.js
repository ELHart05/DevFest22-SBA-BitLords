const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    details: {
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

const doctorModel = mongoose.model('doctorEvents', doctorSchema);

module.exports = doctorModel;
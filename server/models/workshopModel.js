const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        default : false
    },
    owner: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
     description: {
        type: String,
        required: true
    },
    url:{
        type:String
    }
})

const workshopModel = mongoose.model('workshops', workshopSchema);

module.exports = workshopModel;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const busSchema = new Schema({
    events: [
        {
            daysOfWeek: {
                type: [Number],
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            }
        }
    ]
})

const busModel = mongoose.model('buses', busSchema);

module.exports = busModel;
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const userRoutes = require('../routes/userRoutes.js');
const eventRoutes = require('../routes/eventRoutes.js');
const workshopRoutes = require('../routes/workshopRoutes.js');
const busRoutes = require('../routes/busRoutes.js');
const doctorRoutes = require('../routes/doctorRoutes.js');
const notificationRoutes = require('../routes/notificationRoutes.js');

const app = express();

mongoose.set('strictQuery', true);
app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/notifications', notificationRoutes);

mongoose.connect('/your dbURI here/')
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`connected to the db & server start listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err.message);
})
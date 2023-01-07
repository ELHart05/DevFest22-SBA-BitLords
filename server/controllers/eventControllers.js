const eventModel = require('../models/eventModel.js');
const { getDownloadURL, ref, uploadBytesResumable } = require('firebase/storage')
const imageUpload = require('./imageUpload')

const getAllEvents = (req, res) => {
    eventModel.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(40).send({ err: err.message })
        })
}

const newEvent = async (req, res) => {
    const { title, description, date } = req.body;
    const storageRef = ref(imageUpload.storage, `/files/${new Date().getTime().toString() + req.file.originalname}`);
    const uploadTask = uploadBytesResumable(storageRef, req.file.buffer);
    let url
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            console.log('file uploading...');
        },
        (error) => {
            console.log(error);
        },
        async () => {
            url = await getDownloadURL(uploadTask.snapshot.ref);
            const newEvent = eventModel({ title, description, date, url });
            newEvent.save()
                .then((result) => {
                    res.send(result)
                })
                .catch((err) => {
                    res.status(400).send({ err: err.message })
                })
        }
    )

}

const editEvent = (req, res) => {
    const { id } = req.params;
    const { isAccepted } = req.body;
    console.log(isAccepted);
 
  
    eventModel.findByIdAndUpdate(id, { isAccepted })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}

const deleteEvent = (req, res) => {
    const  {id}  = req.params.id;
    eventModel.findByIdAndRemove(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}


module.exports = {
    getAllEvents,
    newEvent,
    editEvent,
    deleteEvent
}
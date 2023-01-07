const doctorModel = require('../models/doctorModel.js');
const { getDownloadURL, ref, uploadBytesResumable } = require('firebase/storage')
const imageUpload = require('./imageUpload')

const getAllDoctors = (req, res) => {
    doctorModel.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(40).send({ err: err.message })
        })
}

const newDoctor = (req, res) => {
    const { event, details, date } = req.body;
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
            const newDoctor = doctorModel({ event, details, date, url });
            newDoctor.save()
                .then((result) => {
                    console.log(result);
                    res.send(result)
                })
                .catch((err) => {
                    console.log(err.message);
                    res.status(400).send({ err: err.message })
                })
        }
    )

}

const editDoctor = (req, res) => {
    const { id } = req.params;

    const { event, details, date } = req.body;

    if (!isValidObjectId(id)) {
        res.status(404).send({ err: "no such Doctors" })
        return;
    }
    if (!req.body.length) {
        res.status(404).send({ err: "no details detected" })
        return;
    }
    doctorModel.findByIdAndUpdate(id, { event, details, date })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}

const deleteDoctor = (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        res.status(404).send({ err: "no such Doctors" })
        return;
    }
    doctorModel.findByIdAndRemove(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}


module.exports = {
    getAllDoctors,
    newDoctor,
    editDoctor,
    deleteDoctor
}
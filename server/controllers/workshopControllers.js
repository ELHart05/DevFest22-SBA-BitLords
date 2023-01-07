const workshopModel = require('../models/workshopModel.js');
const { getDownloadURL, ref, uploadBytesResumable } = require('firebase/storage')
const imageUpload = require('./imageUpload')

const getAllWorkshops = (req, res) => {
    workshopModel.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(40).send({ err: err.message })
        })
}

const newWorkshop = (req, res) => {
    const { name, owner, description, date } = req.body;

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
            const newWorkshop = workshopModel({ name, description, date, url, owner });
            newWorkshop.save()
                .then((result) => {
                    res.send(result)
                })
                .catch((err) => {
                    res.status(400).send({ err: err.message })
                })
        }
    )


}

const editWorkshop = (req, res) => {
    const { id } = req.params;

    const { isAccepted } = req.body;
    console.log(req.body);


    workshopModel.findByIdAndUpdate(id, { isAccepted })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}

const deleteWorkshop = (req, res) => {
    const {id}  = req.params.id

    workshopModel.findByIdAndRemove(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(400).send({ err: err.message })
        })
}


module.exports = {
    getAllWorkshops,
    newWorkshop,
    editWorkshop,
    deleteWorkshop
}
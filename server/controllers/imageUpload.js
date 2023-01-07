require('dotenv').config()
const { initializeApp } = require("firebase/app")
const { getStorage } = require("firebase/storage")

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
module.exports.storage = getStorage(app, "gs://online-shopping-368013.appspot.com");
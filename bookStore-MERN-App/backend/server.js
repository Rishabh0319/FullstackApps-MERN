import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    res.json({ msg: "Hello From Nodejs Server" })
})

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Server is now connected to Database');
        app.listen(PORT, () => {
            console.log(`Server is Running on Port:${PORT}`);
        });
    })
    .catch(() => {
         console.log("Server Connection Fail..");
    });
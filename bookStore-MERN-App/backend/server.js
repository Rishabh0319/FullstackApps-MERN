import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import bookRoute from './routes/books.route.js';

const app = express();

// Middleware for parsing request Body
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: "Hello From Nodejs Server" })
})

app.get('/books',bookRoute);

//  Database Connection
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Database Connected');
        app.listen(PORT, () => {
            console.log(`Server is Running on Port:${PORT}`);
        });
    })
    .catch(() => {
         console.log("Database connection Fail");
    });
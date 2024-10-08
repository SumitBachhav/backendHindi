// require('dotenv').config({path: './.env'});
// require('dotenv').config({path: './env'});
// "dev": "nodemon -r dotenv/config--experimental-json-modules src/index.js"

import connectDB from "./db/index.js";

import { app } from "./app.js";

import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo db connection error: ", err)
})
















/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
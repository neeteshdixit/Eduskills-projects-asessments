// console.log("this is server")

// const express = require("express") for common js

import express from "express"  // for es6 module
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()// to use env variable for project

const app = express()

dbConnect() // to connect database

console.log(process.env.PORT)
//const port = 5000

app.get("/auth/api",authRoutes) // to use auth routes for api

app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})

// npm install -g nodemon baar server ko restart karne ki jarurat nhi hai esiliye hum esko download karte hai globally
// npm install --save-dev nodemon # or using yarn: yarn add nodemon -D for dev dependency
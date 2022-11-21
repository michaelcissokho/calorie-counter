"use strict"

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const path = require('path')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MONGO DB!'))
.catch((err) => console.log(err))

const cors = require('cors')

const foodRoutes = require('./routes/food')
const mealRoutes = require('./routes/meal')

app.use(cors())
app.use(express.json())

//put routes here
app.use('/foods', foodRoutes)
app.use('/meals', mealRoutes)

// app.use(express.static(path.join(__dirname, "/client/build")))
// app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// })

app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
});

module.exports = app

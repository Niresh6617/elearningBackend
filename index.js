const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// Middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', require('./routes/courseRoutes'))

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/LMS').then(() => {
    console.log('db connected');
})

app.get('/', (req, res) => {
    res.send('LMS Backend')
})

app.listen(1000)

var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extende: false
    })
)

const mongoURI = 'mongodb://localhost:27017/logiregister'

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')
app.use('/users', Users)

app.listen(port, () => {
    console.log("Connected to: " + port)
})
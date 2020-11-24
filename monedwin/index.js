const express = require('express')
const corcons = require('cors')

const port = 6500

const mongoose = require('mongoose')
const url = 'mongodb://localhost/codeLabStudentDb'

const app = express()
const myrouter = require('./router/router')
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection


con.on("open", function(){
    console.log('mongoose id up')
})

app.use(corcons())
app.use(express.json())
app.use('/', myrouter)

app.listen(port, function(){
    console.log("this is my port")
})


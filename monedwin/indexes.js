const express = require('express')

const mongoose = require('mongoose')

const port = 4400

const url = 'mongodb://localhost/lavedb'
const server = express()
const leveRouter = require('./edroute')
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function(){

    console.log("mongosse is read to be use")
})

server.use(express.json())

server.use('/',  leveRouter)


server.listen(port, function(){
    console.log("this is the port im usibg")
})
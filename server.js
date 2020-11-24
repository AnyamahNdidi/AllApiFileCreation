const e = require('express')
const express = require('express')
const port = 3500
ssss
const server = express()

const edroute = require('./route')


server.use('/class/api/v1', edroute)


server.listen(port, function(){

    console.log(`this is my port ${port}`)
})

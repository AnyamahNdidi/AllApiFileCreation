const express = require('express')
const concors = require('cors')
const port = 8600

const mongose = require('mongoose')

const url ="mongodb://localhost/todolistdb"

const app = express()
const todoRouter = require('./todoRouter/todorouter')
mongose.connect(url, {useNewUrlParser:true})

const con = mongose.connection

con.on('open', function(){

    console.log("mongose is up and ready to use")
})

app.use(concors())
app.use(express.json())
app.use('/', todoRouter)


app.listen(port, ()=>{
    console.log("the port is ready to use")
})
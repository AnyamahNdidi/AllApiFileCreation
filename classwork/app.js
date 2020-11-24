const express = require('express')

const port = 4500;

const app = express()

const edwin = require('./router')

app.use(express.json())
app.use('/api/v1/codelab', edwin)




app.listen(port, ()=>{
    console.log(`port ${port}`)
})
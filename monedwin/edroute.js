const express = require('express')
const route = require('./router/router')

const levedbschema = require('./router/edshema')
const router = express.Router()

router.get('/', async function(req, res){

    try{

        const newData = await levedbschema.find()
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)

    }  
  
})

router.get('/:id', async function(req, res){

    try{

        const newData = await levedbschema.findById(req.params.id)
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)

    }  
  
})

router.post('/', async function(req, res){

    const createData = new levedbschema({
        name:req.body.name,
        junction:req.body.junction
    })

    try{

        const newData = await createData.save()
        res.status(201).json(newData)
    }catch(error){
        res.status(404).send('error:' + error)
    }
})






module.exports = router
const express = require('express')

const DBShema = require('../schemaData/databasicschema')
const route = express.Router()

route.get('/', async function(req, res){

    try{

        const newData = await DBShema.find()
        res.status(200).json(newData)
    
    }catch(error){
        res.status(200).send("error:" + error)
    } 
})

route.post('/',  async function(req, res){

    const createData = new DBShema({
        name: req.body.name,
        intrest: req.body.intrest,
        age:req.body.age
    })
    try{

        const newData = await createData.save()
        res.status(200).status(newData)

    }catch(error){
        res.status(200).send("error:" + error)
    }

})

module.exports = route
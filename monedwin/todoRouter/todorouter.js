const express =require('express')

const dbtodoschema = require('../todoShema/todoschema')

const route = express.Router()

route.get('/', async function(req, res){

    try{

        const newData = await dbtodoschema.find()
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)

    }  
  
})

route.get('/:id', async function(req, res){

    try{

        const newData = await dbtodoschema.findById(req.params.id)
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)

    }  
  
})
route.post('/', async function(req, res){

    // const createData = new dbtodoschema({
    //     title:req.body.title,
    //     task:req.body.task,
    //     who:req.body.who,
    //     dateTime:req.body.dateTime,
    //     startTime:req.body.startTime
        
    // })

    // try{

    //     const newData = await createData.save()
    //     res.status(201).json(newData)
    // }catch(error){
    //     res.status(404).send('error:' + error)
    // }

    const newData = await dbtodoschema.create(req.body)
    res.status(200).json(newData)
})

route.patch('/:id', async (req, res)=>{
    const newData = await dbtodoschema.findByIdAndUpdate(req.params.id, req.body,{
       new:true, 
    });
    res.status(200).json(newData);
})

route.delete("/:id",  async(req, res) =>{
    const newData = await dbtodoschema.findOneAndDelete(req.params.id);
    res.status(200).send("Delete");
})




module.exports = route
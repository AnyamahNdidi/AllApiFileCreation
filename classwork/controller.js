const { error } = require('console');
const fs = require('fs')

const Files = JSON.parse(fs.readFileSync(`${__dirname}/class.json`));

exports.getclasses = function(req,res,next){

    res.status(200).json({
        sucess:true,
       data:{
           Files
       }
    })
}

exports.getclass = function(req,res,next){
    id = req.params.id *1
    file = Files.find(el => el.id === id)

    if(!file){
        res.status(404).json({
            sucess:false,
            data:null
        })
    }


    res.status(200).json({
        sucess:true,
        data:{
            file
        }
    })
}
exports.postclass = function(req,res,next){
    
        const NewID = Files[Files.length -1].id +1
        const newfile = Object.assign({id : NewID}, req.body)
     
        Files.push(newfile)
     
      fs.writeFile(`${__dirname}/class.json`, 
      JSON.stringify(Files),(err) =>{
     
         res.status(201).json({
           data: {
             newfile
           }
         })
      })
       
    
}
exports.putclass = function(req,res,next){

    res.status(200).json({
        sucess:true,
       message:`this is for editing ${req.params.id}`
    })
}

exports.deleteclass = function(req,res,next){

    res.status(200).json({
        sucess:true,
       message:`this is for deleting ${req.params.id}`
    })
}
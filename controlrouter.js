const { json } = require('body-parser')
const fs = require('fs')
const Files = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

exports.geteds = function(req, res, next){
    res.status(200).json({
        sucess:true,
        message: 'this is for all view' ,
        data:{
            Files
        }
    })
    next()
}

exports.geted = function(req, res, next){
    id = req.params.id *1 
    File = Files.find(el => el.id === id)

    if(!File){
        res.status(404).json({
            status:false,
            data:null
        })
    }

    res.status(200).json({
        sucess:true,
        message: 'this is for all view' ,
        data:{
            File
        }
    })
    next()
}

exports.posted = function(req, res, next){
    const newID = Files[Files.length - 1].id +1
    const newFile = Object.assign({id: newID}, req.body)

    Files.push(newFile)



    res.status(200).json({
        sucess:true,
        message: 'this is for all view' ,
        data:`this is for vewing ${req.params.id}`
    })
    next()
}
exports.puted = function(req, res, next){
    res.status(200).json({
        sucess:true,
        message: 'this is for all view' ,
        data:`this is for editing ${req.params.id}`
    })
    next()
}
exports.deleteed = function(req, res, next){
    res.status(200).json({
        sucess:true,
        message: 'this is for all view' ,
        data:`this is for delete ${req.params.id}`
    })
    next()
}
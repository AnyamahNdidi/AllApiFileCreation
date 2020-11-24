const mongose = require('mongoose')

const todoschema = mongose.Schema({
     
    title:{
        type:String,
        require:true
    },
    
    task:{
        type:String,
        require:true
    },
    who:{
        type:String,
        require:true
    },
    dateTime:{
        type:String,
        default:true
    },
    startTime:{
        type:String,
        require:true
    },
})

module.exports = mongose.model("dbtodoschema", todoschema)
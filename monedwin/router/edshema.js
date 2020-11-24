const mongoose = require('mongoose')

const leveschema =  mongoose.Schema({

    name:{
        type:String,
        require:true,
        defalut:"peter"
    },
    classe : {
        type:String,
        require:true,
        default:"next level"
    }

})

module.exports = mongoose.model('levedbschema', leveschema)
const express = require('express')
const mongoose = require('mongoose')

const  codeLabSchema = mongoose.Schema({

    name:{
        type:String,
        require:true,
        default: "edwin"
    },
    intrest:{
        type:String,
        require:true,
        default:"mobile development"
    },

    age:{
        type: Number,
        require:true,
        default:23
    }

})
module.exports = mongoose.model("DBShema", codeLabSchema)
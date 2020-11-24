const express = require('express')

const router = express.Router()


const{
    getclasses,
    getclass,
    postclass,
    putclass,
    deleteclass

}= require('./controller')

router.route('/').get(getclasses).post(postclass)
router.route('/:id').get(getclass).put(putclass).delete(deleteclass)


module.exports = router
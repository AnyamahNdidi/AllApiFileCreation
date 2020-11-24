const express = require('express')

const router = express.Router()



   const{
    geteds,
    geted,
    posted,
    puted,
    deleteed
   }= require('./controlrouter')


router.route('/').get(geteds).post(posted)
router.route('/:id').get(geted).put(puted).delete(deleteed)


module.exports = router
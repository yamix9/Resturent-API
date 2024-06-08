const express = require('express');
const Resturent = require('../models/resturentModel')
const router = express.Router();
const {getResturents,getResturent,createResturent,updateResturent,deleteResturent} = require('../controllers/resturentController')


router.get('/', getResturents)

router.get('/:id', getResturent)

router.put('/:id', updateResturent)

router.delete('/:id', deleteResturent)

router.post('/', createResturent)

module.exports = router;
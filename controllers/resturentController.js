const Resturent = require('../models/resturentModel')
const asyncHandler = require('express-async-handler')

//get all Resturent details

const getResturents = asyncHandler(async(req, res) => {
    try {
        const resturents = await Resturent.find({});
        res.status(200).json(resturents);
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
  })

//get Resturent details by ID
const getResturent = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const resturent = await Resturent.findById(id);
        res.status(200).json(resturent);
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
 
    }
  })

//Create Resturent details 

const createResturent = asyncHandler(async(req,res) => {
    try {
        const resturent = await Resturent.create(req.body)
        res.status(200).json(resturent)
    } catch (error) {
        res.status(600)
        throw new Error(error.message);
    }
})

//Update Resturent details by ID

const updateResturent = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params; 
        const resturent = await Resturent.findByIdAndUpdate(id,req.body);
        if(!resturent){
           res.status(404);
            throw new Error(`cannot find any resturent with ID ${id}`); 
        }
        const updateResturent = await Resturent.findById(id);
        res.status(200).json(resturent);
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
  })


  //Delete Resturent details by ID

  const deleteResturent = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const resturent = await Resturent.findByIdAndDelete(id);
        if(!resturent){
            res.status(404);
            throw new Error(`cannot find any resturent with ID ${id}`); 
        }
        res.status(200).json(resturent);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })

  module.exports ={
    getResturents,
    getResturent,
    createResturent,
    updateResturent,
    deleteResturent
  }
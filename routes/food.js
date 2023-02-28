"use strict"
const express = require('express')
const router = express.Router()
const Food = require('../models/Food')


router.get('/', async function(req, res, next){
    try {
        const foods = await Food.find()
        return res.json(foods)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async function(req,res,next){
    try{
        const food = await Food.findById(req.params.id)
        return res.json(food)
    }catch(err){
        next(err)
    }
})

router.post('/', async function(req,res,next){
    try {
        const item = new Food(req.body)
        const newFood = await item.save()

        return res.json(newFood)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async function(req,res,next){
    try {
        const item = await Food.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            }, 
            {new: true}) //new set to true returns the newly updated object
        return res.json(item)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async function(req,res,next){
    try {
        const food = await Food.findById(req.params.id)
        await Food.findByIdAndDelete(req.params.id)
        return res.json(`Food item: ${food.name} has been deleted`)
    } catch (err) {
        next(err)
    }
})

module.exports = router
"use strict"

const express = require('express')
const router = express.Router()
const Meal = require('../models/Meal')
const {makeAMeal} = require('../methods/mealMethods')
const { report } = require('process')

router.get('/', async function(req,res,next){
    try {
        const meals = await Meal.find()
        return res.json(meals)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async function(req,res,next){
    try {
        const meal = await Meal.findById(req.params.id)
        return res.json(meal)
    } catch (err) {
        next(err)
    }
})

router.post('/', async function(req,res,next){
    try {
        const report = makeAMeal(req.body)

        const meal = new Meal({items: report.items, summary: report.summary});
        const newMeal = await meal.save();

        return res.json(newMeal)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async function(req,res,next){
    try {
        // const report = makeAMeal(req.body)
        const item = await Meal.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            }, {new: true})

        return res.json(item)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async function(req,res,next){
    try {
        await Meal.findByIdAndDelete(req.params.id)
        return res.json(`Meal: ${req.params.id} has been deleted`)
    } catch (err) {
        next(err)
    }
})

module.exports = router;
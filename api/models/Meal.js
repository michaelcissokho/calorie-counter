const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
    items: [
        {
            item: {type:String, required: true},
            serving: {type: Number, required: true},
            unit: {type: String, required: true},
            calories: {type: Number, required: true},
            protein: {type: Number, required: true},
            carbs: {type: Number, required: true},
            menu_id: {type: String, required: true}
        }
    ],
    summary: [
        {
            calories: {type: Number, required: true},
            protein: {type: Number, required: true},
            carbs: {type: Number, required: true}
        }
    ]
},{timestamps: true})

module.exports = mongoose.model("Meal", MealSchema)
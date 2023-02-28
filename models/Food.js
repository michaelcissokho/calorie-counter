const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    unit: { type: String, required: true},
    calories: { type: Number, required: true},
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true }
});

module.exports = mongoose.model("Food", FoodSchema)


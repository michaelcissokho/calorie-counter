const Meal = require('../models/Meal')

function makeAMeal(requestBody){
    const items = requestBody.items;
    const summary = [{ calories: 0, protein: 0, carbs: 0 }];
    
    for (let item of items){
        for (let category of Object.keys(item)){
            summary[0][category] += item[category]
        }
    }

    return {items, summary}
}


module.exports =  {makeAMeal}

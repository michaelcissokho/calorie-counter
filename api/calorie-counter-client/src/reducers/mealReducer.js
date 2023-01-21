import {ADD_ITEM, CHANGE_EDIT_ITEM, REMOVE_ITEM, START_EDIT, END_EDIT, EDIT_MEAL, INDUCT_SAVED_MEAL } from '../constants/mealConstants';

const INITIAL_STATE = {meal: [], foodItem: {}}

function mealReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ADD_ITEM:

            return {...state, meal: [...state.meal, action.item]}
        
        case REMOVE_ITEM:

            return {...state, meal: state.meal.filter(item => item.id !== action.id)}
        
        case INDUCT_SAVED_MEAL:
            const savedMeal = action.meal

            for (let item of savedMeal){
                item['id'] = item['_id']
                delete item._id
            }

            console.log(savedMeal)

            return {...state, meal: savedMeal}

        case START_EDIT:

            return {...state, foodItem: action.item}

        case CHANGE_EDIT_ITEM:
            
            return {...state, foodItem: action.item}

        case EDIT_MEAL:
            const m = [...state.meal]

            const idx = m.findIndex((item) => item.id === action.originalId)

            if (idx === -1){
                alert("Error updating item, Item ID not found")
                return {...state}
            }

            m[idx] = action.newItem

            return {...state, meal: m}
        
        case END_EDIT:

            return {...state, foodItem: {}}

        default:
            return state;
    }
}

export default mealReducer;
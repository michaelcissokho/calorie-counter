import {ADD_ITEM, REMOVE_ITEM, SET_FOOD_ITEM, END_EDIT, EDIT_MEAL, RESET_MEAL } from '../constants/mealConstants';

const INITIAL_STATE = {meal: [], foodItem: {}}

function mealReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ADD_ITEM:

            return {...state, meal: [...state.meal, action.item]}
        
        case REMOVE_ITEM:

            return {...state, meal: state.meal.filter(item => item.menu_id !== action.id)}

        case SET_FOOD_ITEM:

            return {...state, foodItem: action.item}

        case EDIT_MEAL:
            const m = [...state.meal]

            const idx = m.findIndex((item) => item.menu_id === action.originalId)

            if (idx === -1){
                alert("Error updating item, Item ID not found")
                return {...state}
            }

            m[idx] = action.newItem

            return {...state, meal: m}
        
        case END_EDIT:

            return {...state, foodItem: {}}
        
        case RESET_MEAL:

            return INITIAL_STATE

        default:
            return state;
    }
}

export default mealReducer;
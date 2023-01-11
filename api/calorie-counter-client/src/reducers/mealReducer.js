import {ADD_ITEM, REMOVE_ITEM } from '../constants/mealConstants';

const INITIAL_STATE = {meal: [], mealInEdit: {}}

function mealReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ADD_ITEM:

            return {...state, meal: [...state.meal, action.item]}
        
        case REMOVE_ITEM:

            return {...state, meal: state.meal.filter(item => item.id !== action.id)}

        default:
            return state;
    }
}

export default mealReducer;
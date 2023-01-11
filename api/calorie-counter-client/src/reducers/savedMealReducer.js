import {PULL_MEAL_HISTORY, EDIT_SAVED_MEAL, REMOVE_SAVED_MEAL_FROM_EDIT} from '../constants/savedMealConstants';

const INITIAL_STATE = {mealHistory: [], mealInEdit:{}}

function savedMealReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case PULL_MEAL_HISTORY:
            return {...state, mealHistory: action.history}
        
        case EDIT_SAVED_MEAL:

            return {...state, mealInEdit: action.meal}

        case REMOVE_SAVED_MEAL_FROM_EDIT:

            return {...state, mealInEdit: {}}

        default:
            return state;
    }
}

export default savedMealReducer;
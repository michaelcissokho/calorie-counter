import {PULL_MEAL_HISTORY, EDIT_MEAL_IN_EDITOR, CLEAR_EDITOR, SEED_EDITOR, ADD_TO_EDITOR, REMOVE_FROM_EDITOR, SET_FOODITEM, CLEAR_FOOD_ITEM} from '../constants/savedMealConstants';

const INITIAL_STATE = {mealHistory: [],  editor: {meal:[], summary: {'calories': 0, 'protein': 0, 'carbs': 0}, id:'', foodItem: {}}}

function savedMealReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case PULL_MEAL_HISTORY:
            return {...state, mealHistory: action.history}
        
        case SEED_EDITOR:
            const savedMeal = action.meal
            const {calories, protein, carbs} = action.summary

            return {...state, editor:{...state.editor, meal: savedMeal, summary: {calories, protein, carbs}, id: action.id}}
        
        case ADD_TO_EDITOR:
            const i = action.item
            const updated_meal = [...state.editor.meal, i]

            let s_ = {...state.editor.summary}
            s_.calories+=i.calories
            s_.protein+=i.protein
            s_.carbs+=i.carbs

            return {...state, editor:{...state.editor, meal:updated_meal, summary:s_}}
        
        case REMOVE_FROM_EDITOR:
            const {id, item} = action

            let items = state.editor.meal.filter((i) => i.menu_id !== id)

            let s = {...state.editor.summary}
            s.calories-=item.calories
            s.protein-=item.protein
            s.carbs-=item.carbs

            return {...state, editor:{...state.editor, meal: items, summary: s}}
        
        case SET_FOODITEM:

            return {...state, editor:{...state.editor, foodItem: action.item}}
        
        case EDIT_MEAL_IN_EDITOR:
            const {oldItem, newItem} = action
            const m = [...state.editor.meal]

            const idx = m.findIndex((item) => item.menu_id === oldItem.menu_id)

            if (idx === -1){
                alert("Error updating item, Item ID not found")
                return {...state}
            }

            m[idx] = newItem
            
            let new_s = {...state.editor.summary}
            new_s.calories = new_s.calories - oldItem.calories + newItem.calories
            new_s.protein = new_s.protein - oldItem.protein + newItem.protein
            new_s.carbs = new_s.carbs - oldItem.carbs + newItem.carbs

            return {...state, editor: {...state.editor, meal: m, summary: new_s}}
        
        case CLEAR_FOOD_ITEM:

            return {...state, editor:{...state.editor, foodItem: {}}}

        case CLEAR_EDITOR:

            return {...state, editor: {meal:[], summary: {}, id:'', foodItem: {}}}

        default:
            return state;
    }
}

export default savedMealReducer;
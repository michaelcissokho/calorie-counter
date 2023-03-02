import axios from "axios"
import {CLEAR_EDITOR, SET_MEAL_HISTORY, REMOVE_FROM_EDITOR, SEED_EDITOR, ADD_TO_EDITOR, SET_FOODITEM, CLEAR_FOOD_ITEM, CHANGE_ITEM_IN_SAVED_MEAL} from '../constants/savedMealConstants'

const API_URL = process.env.NODE_ENV === 'production' ? 'https://calorific.herokuapp.com' : 'http://localhost:5001';

export function getMealHistory(){
    return async function(dispatch){
        try {
            let res = await axios.get(`${API_URL}/meals/`)
            dispatch(setMealHistory(res.data.reverse()))
        } catch (err) {
            alert('Problem Pulling History')
            console.log(err)
        }
    }
}

export function setMealHistory(history){
    return (
        {
            type: SET_MEAL_HISTORY,
            history
        }
    )
}

export function deleteMealFromHistory(id){
    return async function (dispatch){
        try {
            await axios.delete(`${API_URL}/meals/${id}`)
            dispatch(getMealHistory())
        } catch (err) {
            alert('Problem Deleting Meal')
            console.log(err)
        }
    }
}

export function editSavedMeal(id, meal, summary){
    return async function(dispatch){
        try {
            await axios.put(`${API_URL}/meals/${id}`, {items: meal, summary})
            dispatch(getMealHistory())
            dispatch({type: CLEAR_EDITOR})
            alert(`Meal ${id} has been updated`)
        } catch (err) {
            alert('Problem Updating Meal. See Console For Details.')
        }
    }
}

export function seedEditor(meal, id, summary){
    return(
        {
            type: SEED_EDITOR,
            meal,
            id,
            summary
        }   
    )
}

export function addToEditor(item){
    return(
        {
            type: ADD_TO_EDITOR,
            item
        }
    )
}

export function removeFromEditor(id, item){
    return (
        {
            type: REMOVE_FROM_EDITOR,
            id,
            item
        }
    )
}

export function generateBaseItem_(id){
    return async function getBaseItem(dispatch){
        let res = await axios.get(`${API_URL}/foods/${id}`)
        dispatch(setFoodItem(res.data))
    }
}

export function setFoodItem(item){
    return (
        {
            type: SET_FOODITEM,
            item
        }
    )
}

export function changeItemInSavedMeal(oldItem, newItem){
    return(
        {
            type: CHANGE_ITEM_IN_SAVED_MEAL,
            oldItem,
            newItem
        }
    )
}

export function clearFoodItem(){
    return(
        {
            type: CLEAR_FOOD_ITEM
        }
    )
}

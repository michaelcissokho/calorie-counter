import axios from "axios"
import {CLEAR_EDITOR, PULL_MEAL_HISTORY, REMOVE_FROM_EDITOR, SEED_EDITOR, ADD_TO_EDITOR, SET_FOODITEM, CLEAR_FOOD_ITEM, EDIT_MEAL_IN_EDITOR} from '../constants/savedMealConstants'

export function getMealHistory(){
    return async function(dispatch){
        try {
            let res = await axios.get('http://localhost:5000/meals/')
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
            type: PULL_MEAL_HISTORY,
            history
        }
    )
}

export function editSavedMeal(id, meal, summary){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:5000/meals/${id}`, {items: meal, summary})
            dispatch(getMealHistory())
            dispatch({type: CLEAR_EDITOR})
            alert(`Meal ${id} has been updated`)
        } catch (err) {
            alert('Problem Updating Meal. See Console For Details.')
        }
    }
}

export function deleteMealFromHistory(id){
    return async function (dispatch){
        try {
            await axios.delete(`http://localhost:5000/meals/${id}`)
            dispatch(getMealHistory())
        } catch (err) {
            alert('Problem Deleting Meal')
            console.log(err)
        }
    }
}

export function generateBaseItem_(id){
    return async function getBaseItem(dispatch){
        let res = await axios.get(`http://localhost:5000/foods/${id}`)
        dispatch(setFoodItem(res.data))
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

export function setFoodItem(item){
    return (
        {
            type: SET_FOODITEM,
            item
        }
    )
}

export function editMealInEditor(oldItem, newItem){
    return(
        {
            type: EDIT_MEAL_IN_EDITOR,
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

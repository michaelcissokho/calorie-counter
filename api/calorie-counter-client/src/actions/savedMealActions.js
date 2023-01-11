import axios from "axios"
import {PULL_MEAL_HISTORY, REMOVE_SAVED_MEAL_FROM_EDIT} from '../constants/savedMealConstants'

//FINISH UP THIS FUNCTION
export function updateMealHistory(id, meal){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:5000/meals/${id}`, meal)
            dispatch(getMealHistory())
            dispatch({type: REMOVE_SAVED_MEAL_FROM_EDIT})
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
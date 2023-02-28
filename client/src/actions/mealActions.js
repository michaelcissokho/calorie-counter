import axios from 'axios';
import {ADD_ITEM, REMOVE_ITEM, SET_FOOD_ITEM, END_EDIT, EDIT_MEAL, RESET_MEAL} from '../constants/mealConstants';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://calorific.herokuapp.com' : 'http://localhost:5000';

export function addItem(item, coreItem){
    return (
        {
            type: ADD_ITEM,
            item,
            coreItem
        }
    )
};

export function removeItem(id){
    return (
        {
            type: REMOVE_ITEM,
            id
        }
    )
};

export function generateBaseItem(id){
    return async function getBaseItem(dispatch){
        let res = await axios.get(`${BASE_URL}/foods/${id}`)
        dispatch(setFood_Item(res.data))
    }
}

export function setFood_Item(item){
    return (
        {
            type: SET_FOOD_ITEM,
            item
        }
    )
}

export function editMeal(originalId, newItem){
    return (
        {
            type: EDIT_MEAL,
            originalId,
            newItem
        }
    )
}

export function endEdit(){
    return (
        {
            type: END_EDIT
        }
    )
}

export function resetMeal(){
    return(
        {
            type: RESET_MEAL
        }
    )
}
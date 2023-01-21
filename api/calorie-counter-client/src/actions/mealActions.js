import axios from 'axios';
import {ADD_ITEM, REMOVE_ITEM, START_EDIT, END_EDIT, CHANGE_EDIT_ITEM,  EDIT_MEAL, INDUCT_SAVED_MEAL} from '../constants/mealConstants';

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

export function inductSavedMeal(meal){
    return(
        {
            type: INDUCT_SAVED_MEAL,
            meal
        }   
    )
}

export function generateBaseItem(id){
    return async function getBaseItem(dispatch){
        let res = await axios.get(`http://localhost:5000/foods/${id}`)
        console.log(res.data)
        dispatch(startEdit(res.data))
    }
}

function startEdit(item){
    return (
        {
            type: START_EDIT,
            item
        }
    )
}

export function changeEditItem(item){
    return (
        {
            type: CHANGE_EDIT_ITEM,
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
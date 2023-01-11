import axios from 'axios'; 
import {PULL_MENU, REMOVE_ITEM_FROM_EDIT, CHANGE_FOOD_ITEM} from '../constants/menuConstants'

export function getMenu(){
    return async function(dispatch){
        let res = await axios.get('http://localhost:5000/foods/');
        dispatch(pullMenu(res.data))
    }
}

export function addToMenu(item){
    return async function(dispatch){
        try {
            await axios.post('http://localhost:5000/foods/', item)
            dispatch(getMenu())
        } catch (err) {
            alert('Error Uploading Food Item. See Console.')
            console.log(err)
        }
    }
}

export function updateMenu(item, id){
    return async function(dispatch){
        try {
            await axios.put(`http://localhost:5000/foods/${id}`, item)
            dispatch({type: REMOVE_ITEM_FROM_EDIT })
        } catch (err) {
            alert('Error updating menu item. See console.')
            console.log(err)
        }
    }
}

export function deleteFromMenu(id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:5000/foods/${id}`)
            dispatch(getMenu())
        } catch (err) {
            alert('Error Deleting Food Item. See Console.')
            console.log(err)
        }
    }
}

export function changeFoodItem(newItem){
    return(
        {
            type: CHANGE_FOOD_ITEM,
            newItem
        }
    )
}

function pullMenu(menu){
    return(
        {
            type:PULL_MENU,
            menu
        }
    )
}


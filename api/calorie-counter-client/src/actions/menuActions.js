import axios from 'axios'; 
import {PULL_MENU} from '../constants/menuConstants'

export function getMenu(){
    return async function(dispatch){
        let res = await axios.get('http://localhost:5000/foods/');
        dispatch(pullMenu(res.data))
    }
}

function pullMenu(menu){
    return(
        {
            type:PULL_MENU,
            menu
        }
    )
}


export function addToMenu(item){
    return async function(dispatch){
        try {
            await axios.post('http://localhost:5000/foods/', item)
            dispatch(getMenu())
        } catch (err) {
            alert('Error Uploading Food Item')
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
            alert('Error Deleting Food Item')
            console.log(err)
        }
    }
}

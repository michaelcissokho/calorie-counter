import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromMenu } from '../actions/menuActions';
import { EDIT_MENU_ITEM } from '../constants/menuConstants';

const MenuItem = ({item}) => {
    const dispatch = useDispatch()

    const editMenuItem = () => {
        dispatch({type: EDIT_MENU_ITEM, item})
    }

    const deleteItem = (id) => {
        dispatch(deleteFromMenu(id)) 
    }

    return(
        <li key={item._id}>
            Name: {item.name} (per {item.unit}) <br></br> 
            Calories: {item.calories} <br></br> 
            Protein: {item.protein} <br></br> 
            Carbs: {item.carbs} <br></br>
            <button onClick={() => editMenuItem(item)}> <Link style={{textDecoration:'none', color:'black'}} to="/edit-menu-item"> Edit </Link></button> 
            <button onClick={() => deleteItem(item._id)}> Delete </button>
        </li>
    )
}

export default MenuItem;
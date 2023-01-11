import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {removeFromSummary} from '../actions/summaryActions';
import {removeItem} from '../actions/mealActions';
import styled from 'styled-components';
import EditMealItem from './EditMealItem';

const EditButton = styled.button`
    margin-left: 10px;
`

const MealItem = ({item}) => {
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
        
    const editItem = () => {
        
    }

    const cancelEdit = () => {
        setEditing(false)
    }

    const deleteItem = (id) => {
        dispatch(removeFromSummary(item))
        dispatch(removeItem(id))
    }

    return(
        <div>
            {editing ? <EditMealItem item={item} cancelEdit={cancelEdit}/> 
            :<li> 
                {item.item} ({item.serving} {item.unit}) ---- calories: {Math.round(item.calories)}, protein: {Math.round(item.protein)}g, carbs: {Math.round(item.carbs)}g
                {/* <EditButton onClick={() => setEditing(true)}> Edit </EditButton> */}
                <button  onClick={() => deleteItem(item.id)}> Delete </button>
            </li>}
        </div>
    )
}

export default MealItem
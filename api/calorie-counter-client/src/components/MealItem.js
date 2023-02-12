import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {removeFromSummary} from '../actions/summaryActions';
import {removeItem, generateBaseItem} from '../actions/mealActions';
import styled from 'styled-components';
import EditMealItem from './EditMealItem';

const EditButton = styled.button`
    margin-left: 10px;
`

const MealItem = ({item}) => {
    const [editing, setEditing] = useState(false)

    const dispatch = useDispatch()

    const editItem = () => {
        dispatch(generateBaseItem(item.menu_id))
        setEditing(true)
    }

    const deleteItem = (id) => {
        dispatch(removeFromSummary(item))
        dispatch(removeItem(id))
    }

    return(
        <div>
            {editing ? <EditMealItem weight={item.serving} oldItem ={item} setEditing={setEditing}/> 
            :<li> 
                {item.item} ({item.serving} {item.unit}) ---- calories: {Math.round(item.calories)}, protein: {Math.round(item.protein)}g, carbs: {Math.round(item.carbs)}g
                <EditButton onClick={editItem}> Edit </EditButton>
                <button  onClick={() => deleteItem(item.menu_id)}> Delete </button>
            </li>}
        </div>
    )
}

export default MealItem
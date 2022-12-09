import React from 'react'
import {useDispatch} from 'react-redux';
import {removeFromSummary} from '../actions/summaryActions';
import {removeItem} from '../actions/mealActions';
import styled from 'styled-components';

const EditButton = styled.button`
    margin-left: 10px;
`

const FoodItem = ({item}) => {
    const dispatch = useDispatch()
    
    const editItem = () => {

    }

    const deleteItem = (id) => {
        dispatch(removeFromSummary(item))
        dispatch(removeItem(id))
    }

    return(
        <div>
            <li> 
                {item.name} ---- calories: {Math.round(item.calories)}, protein: {Math.round(item.protein)}g, carbs: {Math.round(item.carbs)}g
                <EditButton onClick={() => editItem(item.id)}> Edit </EditButton>
                <button  onClick={() => deleteItem(item.id)}> Delete </button>
            </li>
        </div>
    )
}

export default FoodItem
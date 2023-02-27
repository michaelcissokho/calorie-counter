import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import { generateBaseItem_, removeFromEditor } from '../actions/savedMealActions';
import EditSavedMealItem from './EditSavedMealItem';

const EditButton = styled.button`
    margin-left: 10px;
`

const SavedMealItem = ({item}) => {
    const [editing, setEditing] = useState(false)

    const dispatch = useDispatch()

    const editItem = () => {
        dispatch(generateBaseItem_(item.menu_id))
        setEditing(true)
    }

    const deleteItem = (id) => {
        dispatch(removeFromEditor(id, item))
    }

    return(
        <div>
            {editing ? <EditSavedMealItem weight={item.serving} oldItem ={item} setEditing={setEditing}/> 
            :<li> 
                {item.item} ({item.serving} {item.unit}) ---- calories: {Math.round(item.calories)}, protein: {Math.round(item.protein)}g, carbs: {Math.round(item.carbs)}g
                <EditButton onClick={editItem}> Edit </EditButton>
                <button  onClick={() => deleteItem(item.menu_id)}> Delete </button>
            </li>}
        </div>
    )
}

export default SavedMealItem;
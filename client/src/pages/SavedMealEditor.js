import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { editSavedMeal } from '../actions/savedMealActions';
import SavedMealItem from '../components/SavedMealItem';
import AddSavedMealItem from '../components/AddSavedMealItem';

const Button = styled.button`
    margin-top: 25px;
`;

const SavedMealEditor = () => {
    const {meal, summary, id} = useSelector(state => state.mealHistory.editor)
    const {calories, protein, carbs} = summary
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const saveMeal = async (e) => {
        dispatch(editSavedMeal(id, meal, summary))
        navigate('/saved-meals')
    }
    
    return(
        <div>
            <AddSavedMealItem />

            <div>
                <h4>Items:</h4>
                <ul style={{listStyle: "none"}}>
                    {meal.map((item) => <SavedMealItem key={item.menu_id} item={item} />)}
                </ul>
            </div>
            
            <div>
                <h4>Summary:</h4>
                <p>Calories:  {Math.round(calories)}</p>
                <p>Protein: {Math.round(protein)} g</p>
                <p>Carbs: {Math.round(carbs)} g</p>
            </div>
            <Button onClick={saveMeal}>Save Meal</Button>
        </div>
    )
}

export default SavedMealEditor;
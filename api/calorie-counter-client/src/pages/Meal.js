import React from 'react';
import {useNavigate} from 'react-router-dom'
import MealItem from '../components/MealItem'
import AddItem from '../components/AddItem'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { resetMeal } from '../actions/mealActions';
import { resetSummary } from '../actions/summaryActions';

const Button = styled.button`
    margin-top: 25px;
`;

const Meal = () => {
    const {summary} = useSelector(state=> state.summary)
    const {calories, protein, carbs} = useSelector(state => state.summary.summary);
    const {meal, reuseID} = useSelector(state => state.meal);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const saveMeal = async (e) => {
        if (reuseID){
            try {
                await axios.put(`http://localhost:5000/meals/${reuseID}`,{items: meal, summary})
                alert(`Meal ${reuseID} has been updated`)
                navigate('/saved-meals')
                dispatch(resetMeal())
                dispatch(resetSummary())
            } catch (err) {
                alert('Problem Updating Meal')
            }
        }else{
            try {
                await axios.post(`http://localhost:5000/meals/`, {items: meal})
                alert('Meal Saved')
            } catch (err) {
                alert('Problem Saving Meal')
            }
        }
    }
    
    return(
        <div>
            <AddItem />

            <div>
                <h4>Items:</h4>
                <ul style={{listStyle: "none"}}>
                    {meal.map((item) => <MealItem key={item.menu_id} item={item} />)}
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

export default Meal;
import React from 'react';
import MealItem from '../components/MealItem'
import AddItem from '../components/AddItem'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { mobile } from '../responsive';
import { resetMeal } from '../actions/mealActions';
import { resetSummary } from '../actions/summaryActions';

const Button = styled.button`
    margin-top: 25px;
`;

const MealDiv = styled.div`
    ${mobile({
        // width: '80%'
    })}
`

const API_URL = process.env.NODE_ENV === 'production' ? 'https://calorific.herokuapp.com' : 'http://localhost:5001';

const Meal = () => {
    const {calories, protein, carbs} = useSelector(state => state.summary.summary);
    const {meal} = useSelector(state => state.meal);

    const dispatch = useDispatch()

    const saveMeal = async (e) => {
        try {
            await axios.post(`${API_URL}/meals/`, {items: meal})
            alert('Meal Saved')
            dispatch(resetMeal())
            dispatch(resetSummary())
        } catch (err) {
            alert('Problem Saving Meal')
        }
    }
    
    return(
        <MealDiv>
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
        </MealDiv>
    )
}

export default Meal;
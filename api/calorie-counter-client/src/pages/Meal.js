import React from 'react';
import MealItem from '../components/MealItem'
import AddItem from '../components/AddItem'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
    margin-top: 25px;
`;

const Meal = () => {
    const {calories, protein, carbs} = useSelector(state => state.summary.summary);
    const {meal} = useSelector(state => state.meal);

    const saveMeal = async (e) => {
        try {
            await axios.post("http://localhost:5000/meals/", {items: meal})
            alert('Meal Saved')
        } catch (err) {
            alert('Problem Saving Meal')
        }
    }
    
    return(
        <div>
            <AddItem />

            <div>
                <h4>Items:</h4>
                <ul style={{listStyle: "none"}}>
                    {meal.map((item) => <MealItem key={item.id} item={item} />)}
                </ul>
            </div>
            
            <div>
                <h4>Summary:</h4>
                <p>Calories:  {calories}</p>
                <p>Protein: {protein} g</p>
                <p>Carbs: {carbs} g</p>
            </div>
            <Button onClick={saveMeal}>Save Meal</Button>
        </div>
    )
}

export default Meal;
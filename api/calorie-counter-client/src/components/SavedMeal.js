import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { deleteMealFromHistory } from '../actions/savedMealActions';
import { inductSavedMeal } from '../actions/mealActions';
import { inductSavedSummary } from '../actions/summaryActions';

const MealDiv = styled.div`
    margin: auto;
    margin-bottom: 10px;
    border-style: solid;
    width: 30%;
    overflow: auto;
`;

const ItemList = styled.div`
    overflow: auto;
    height: 500px;
    border-bottom: solid;
`;

const SavedMeal = ({meal}) => {
    
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const editSavedMeal = () => {
        dispatch(inductSavedMeal(meal.items))
        dispatch(inductSavedSummary(meal.summary[0]))
        navigate('/')
    }

    return (
        <MealDiv>
            <ItemList>
                <h4>Breakdown:</h4>
                {meal.items.map(item => 
                    <div key={item._id}>
                        <h5>{item.item.toUpperCase()}</h5>
                        <h6> Serving: {item.serving} {item.unit} </h6>
                        <h6> Calories: {item.calories} </h6>
                        <h6> Carbs: {item.carbs} g </h6>
                        <h6> Protein: {item.protein} g </h6>
                    </div>
                )}
            </ItemList>

            <h3> Summary: </h3>
            <h6> Calories: {meal.summary[0].calories} </h6>
            <h6> Protein: {meal.summary[0].protein} g </h6>
            <h6> Carbs: {meal.summary[0].carbs} g</h6>
            <br></br>

            <h5> Last Updated: {meal.updatedAt} </h5>
            <button onClick={editSavedMeal}>Edit</button>
            <button style={{marginBottom: '10px'}} onClick={() => dispatch(deleteMealFromHistory(meal._id))}>Delete</button>
        </MealDiv>
    )
}

export default SavedMeal;
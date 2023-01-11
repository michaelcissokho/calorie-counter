import React, { useEffect} from 'react';
import SavedMeal from '../components/SavedMeal';
import { getMealHistory } from '../actions/savedMealActions';
import {useSelector, useDispatch} from 'react-redux';
import _, {isEqual} from 'lodash';

const MealHistory = () => {
    const {mealHistory} = useSelector(state => state.mealHistory, isEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMealHistory())
    }, [dispatch])

    return (
        <div>
            <h3 style={{textAlign: 'center', marginLeft: '40px'}}> Meal History </h3>
            <ul style={{listStyle:'none'}}>
                {mealHistory.map(meal => <SavedMeal key={meal._id} meal={meal}/>)}
            </ul>
        </div>
    )
}


export default MealHistory;
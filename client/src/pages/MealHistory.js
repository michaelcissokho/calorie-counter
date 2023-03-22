import React, { useEffect} from 'react';
import SavedMeal from '../components/SavedMeal';
import { getMealHistory } from '../actions/savedMealActions';
import {useSelector, useDispatch} from 'react-redux';
import _, {isEqual} from 'lodash';
import {mobile} from '../responsive';
import styled from 'styled-components';

const History = styled.div`
    list-style: none;
    ${mobile({
        width: '88%'
    })}
`

const List = styled.ul`
    ${mobile({
        width: '92%'
    })}
`

const Header = styled.h3`
    text-align: center;
    margin-left: 25px;
    ${mobile({
        marginLeft: '60px'
    })}
`

const MealHistory = () => {
    const {mealHistory} = useSelector(state => state.mealHistory, isEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMealHistory())
    }, [dispatch])

    return (
        <History>
            <Header> Meal History </Header>
            <List style={{listStyle:'none'}}>
                {mealHistory.map(meal => <SavedMeal key={meal._id} meal={meal}/>)}
            </List>
        </History>
    )
}


export default MealHistory;
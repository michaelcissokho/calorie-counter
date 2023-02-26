import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu} from '../actions/menuActions';
import styled from 'styled-components'
import { isEqual } from 'lodash';
import { setFoodItem, editMealInEditor, clearFoodItem } from '../actions/savedMealActions';

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 25px;
`;

const Button = styled.button`
    margin-left: 10px;
`;

const FoodItemUnit = styled.div`
    margin-left: 5px;
    margin-right: 5px;
`;

const EditSavedMealItem = ({weight, oldItem, setEditing}) => {    
    const {menu} = useSelector(state => state.menu, isEqual)
    const {foodItem} = useSelector(state => state.mealHistory.editor, isEqual)

    const [serving, setServing] = useState(weight)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    const roundTwoDigits = (value) => {
        return Math.round(value* 100)/100
    }

    const changeAnItem = (e) => {
        e.preventDefault()

        const {name, calories, protein, carbs, unit} = foodItem
        const i = {'item': name, 'calories': roundTwoDigits(calories * serving), 'protein': roundTwoDigits(protein * serving), 'carbs': roundTwoDigits(carbs * serving), unit, serving, menu_id :foodItem._id}

        dispatch(editMealInEditor(oldItem, i));
        exitEdit()

        document.getElementById(`meal-item-${foodItem._id}`).reset() //reset form
    }

    const handleFoodFilter = (e) => {
        dispatch(setFoodItem(JSON.parse(e.target.value)))
    }

    const adjustServing = (e) => {
        setServing(e.target.value)
    }

    const exitEdit = (e) => {
        setEditing(false)
        dispatch(clearFoodItem())
    }

    return(
        <Form onSubmit={changeAnItem} id={`meal-item-${foodItem._id}`}>
            <select id="menu" onChange={handleFoodFilter}>
                {menu.map(food => {
                    if (foodItem.name === food.name){
                        return <option key={food._id} value={JSON.stringify(food)} selected> {food.name} </option>
                    }else{
                        return <option key={food._id} value={JSON.stringify(food)}> {food.name} </option>
                    }
                })}
            </select>

            <input id="serving" value={serving} onChange={adjustServing}/>
            <FoodItemUnit> {foodItem.unit} </FoodItemUnit>
            <Button> Submit </Button>
            <Button onClick={exitEdit}> Cancel </Button>
        </Form>
    )
}

export default EditSavedMealItem;
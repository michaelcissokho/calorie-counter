import React, {useState, useEffect} from 'react';
// import {v4 as uuid} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {addToSummary} from '../actions/summaryActions';
import {addItem} from '../actions/mealActions';
import {getMenu, changeFoodItem} from '../actions/menuActions';
import styled from 'styled-components';
import { isEqual } from 'lodash';
import {mobile} from '../responsive';
import { START_FROM_THE_TOP } from '../constants/menuConstants';

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    ${mobile({
        display: 'block'
    })}
`;

const MenuSelect = styled.select`
    ${mobile({
        padding: '1.5px'
    })}
`

const ServingInput = styled.input`
    ${mobile({
       
    })}
`

const FoodItemUnit = styled.div`
    margin-left: 5px;
    margin-right: 5px;
    ${mobile({
        marginTop: '15px',
        marginBottom: '15px'
    })}
`;

const Button = styled.button`
    margin-left: 10px;
    ${mobile({
        marginRight: '10px'
    })}
`;

const AddItem = () => {
    const {menu, foodItem} = useSelector(state => state.menu, isEqual)
    const [serving, setServing] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    const roundTwoDigits = (value) => {
        return Math.round(value * 100)/100
    }

    const addAnItem = (e) => {
        e.preventDefault()

        const {name, calories, protein, carbs, unit } = foodItem
        const i = {'item': name, 'calories': roundTwoDigits(calories*serving), 'protein': roundTwoDigits(protein*serving), 'carbs': roundTwoDigits(carbs*serving), unit, serving, menu_id: foodItem._id}
        
        dispatch(addToSummary(i));
        dispatch(addItem(i));
        dispatch({type: START_FROM_THE_TOP})

        document.querySelector('form').reset()
        setServing(0) 
    }

    const handleFoodFilter = (e) => {
        dispatch(changeFoodItem(JSON.parse(e.target.value)))
    }

    return(
        <Form onSubmit={addAnItem}>
            <MenuSelect onChange={handleFoodFilter}>
                {/* <option disabled >Select An Item</option> */}
                {menu.map(food => (
                    <option key={food._id} value={JSON.stringify(food)}> {food.name} </option>
                ))}
            </MenuSelect>

            <ServingInput placeholder="0" onChange={(e) => setServing(e.target.value)}/>
            <FoodItemUnit> {foodItem.unit} </FoodItemUnit>
            <Button> Add Item </Button>
        </Form>
    )
}

export default AddItem;
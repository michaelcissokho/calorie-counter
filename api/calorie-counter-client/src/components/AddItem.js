import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {addToSummary} from '../actions/summaryActions';
import {addItem} from '../actions/mealActions';
import {getMenu} from '../actions/menuActions';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

const Button = styled.button`
    margin-left: 10px;
`;

const FoodItemUnit = styled.div`
    margin-left: 5px;
    margin-right: 5px;
`;

const AddItem = () => {
    const {menu} = useSelector(state => state.menu)
    const [foodItem, setFoodItem] = useState({})
    const [weight, setWeight] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    const addAnItem = (e) => {
        e.preventDefault()
        const form = document.querySelector('form') //I think you can delete this later
        const item = JSON.parse(document.getElementById('menu').value)
        const id = uuid()
        const i = {'name': item.name, 'calories': item.calories * weight, 'protein': item.protein * weight, 'carbs': item.carbs * weight, id}
        
        dispatch(addToSummary(i));
        dispatch(addItem(i));

        form.reset()
        setWeight(0) 
    }

    const handleFoodFilter = (e) => {
        setFoodItem(JSON.parse(e.target.value))
    }

    return(
        <Form onSubmit={addAnItem}>
            <select id="menu" onChange={handleFoodFilter}>
                {/* <option selected disabled>Select An Item</option> */}
                {menu.map(food => (
                    <option key={food._id} value={JSON.stringify(food)}> {food.name} </option>
                ))}
            </select>

            <input id="weight" placeholder="0" onChange={(e) => setWeight(e.target.value)}/>
            <FoodItemUnit> {foodItem.unit} </FoodItemUnit>
            <Button> Add Item </Button>
        </Form>
    )
}

export default AddItem;
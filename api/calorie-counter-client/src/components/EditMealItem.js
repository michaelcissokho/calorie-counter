import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToSummary} from '../actions/summaryActions';
import {addItem} from '../actions/mealActions';
import {getMenu} from '../actions/menuActions';
import styled from 'styled-components'
import { isEqual } from 'lodash';

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

const EditMealItem = ({item, cancelEdit}) => {
    // const INITIAL_STATE = {'item': item.item, 'calories': item.calories, 'protein': item.protein, 'carbs': item.carbs, 'unit': item.unit, 'serving': item.serving}
    // const [formData, setFormData] = useState(INITIAL_STATE)
    
    const {menu} = useSelector(state => state.menu, isEqual)
    const [foodItem, setFoodItem] = useState(menu.filter(food => food.name === item.item))
    const [serving, setServing] = useState(item.serving)
    const dispatch = useDispatch()

    console.log(foodItem)
    console.log(item)

    useEffect(() => {
        dispatch(getMenu())
    },[dispatch])

    // useEffect(() => {
    //     function getFirstItem(){
    //         setFoodItem(menu.filter(food => food.name === item.item))
    //     }
    //     getFirstItem()
    // },[])

    const roundTwoDigits = (value) => {
        return Math.round(value* 100)/100
    }

    const changeAnItem = (e) => {
        e.preventDefault()

        const {name, calories, protein, carbs, unit} = foodItem
        const i = {'item': name, 'calories': roundTwoDigits(calories * serving), 'protein': roundTwoDigits(protein * serving), 'carbs': roundTwoDigits(carbs * serving), unit, serving, id:item._id}
        
        dispatch(addToSummary(i));
        dispatch(addItem(i));

        document.getElementById(`meal-item-${item._id}`).reset() //reset form
    }

    const handleFoodFilter = (e) => {
        setFoodItem(JSON.parse(e.target.value))
    }

    const adjustServing = (e) => {
        setServing(e.target.value)
    }

    return(
        <Form onSubmit={changeAnItem} id={`meal-item-${item._id}`}>
            <select id="menu" onChange={handleFoodFilter}>
                {menu.map(food => {
                    if (item.item === food.name){
                        return <option key={food._id} value={JSON.stringify(food)} selected> {food.name} </option>
                    }else{
                        return <option key={food._id} value={JSON.stringify(food)}> {food.name} </option>
                    }
                })}
            </select>

            <input id="serving" value={serving} onChange={adjustServing}/>
            <FoodItemUnit> {foodItem.unit} </FoodItemUnit>
            <Button> Submit </Button>
            <Button onClick={cancelEdit}> Cancel </Button>
        </Form>
    )
}

export default EditMealItem;
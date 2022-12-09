import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {addToMenu, deleteFromMenu, getMenu} from '../actions/menuActions';
import _, { isEqual } from 'lodash';

const AddItemForm = styled.form`
    justify-content: center;
    margin: 25px;
`;

const FormLabel = styled.label`
    margin-right: 10px;
`;

const FormInput = styled.input`
    align-items: right;
`

const MenuList = styled.ul`
    display: inline-block;
    width: 25%;
    list-style: none;
    overflow: auto;
    height: 500px;
    border-style: solid;
`;

const Menu = () => {
    const INITIAL_STATE = { 'name': '', 'unit': '', 'calories': 0, 'protein': 0, 'carbs': 0 }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [writing, setWriting] = useState(false)
    const { menu } = useSelector(state => state.menu, isEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])

    const handleChange = (e) => {
        e.preventDefault()
        setFormData(
            {...formData, [e.target.name]:e.target.value}
        )
    }

    const deleteItem = (id) => {
        dispatch(deleteFromMenu(id))
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addToMenu(formData))
        setFormData(INITIAL_STATE)
        setWriting(false)
    }

    return (
        <div>
            <h3> Menu:</h3>
            <MenuList style={{ listStyle: "none" }}>
                {menu.map(item => <li key={item._id}>
                        Name: {item.name} (per {item.unit}) <br></br> 
                        Calories: {item.calories} <br></br> 
                        Protein: {item.protein} <br></br> 
                        Carbs: {item.carbs} <br></br>
                        <button> Edit </button> 
                        <button onClick={() => deleteItem(item._id)}> Delete </button>
                    </li>)}
            </MenuList>
            <br></br>
            
            {!writing && <button onClick={() => setWriting(true)}> Add Item </button>}
            

            {writing && <AddItemForm onSubmit={submitForm}>
                <FormLabel>Name:</FormLabel>
                <FormInput name="name" value={formData.name} onChange={handleChange} />
                <br></br>

                <FormLabel>Unit:</FormLabel>
                <FormInput name="unit" value={formData.unit} onChange={handleChange} />
                <br></br>

                <FormLabel>Calories:</FormLabel>
                <FormInput name="calories" value={formData.calories} onChange={handleChange} />
                <br></br>

                <FormLabel>Protein:</FormLabel>
                <FormInput name="protein" value={formData.protein} onChange={handleChange} />
                <br></br>

                <FormLabel>Carbs</FormLabel>
                <FormInput name="carbs" value={formData.carbs} onChange={handleChange} />
                <br></br>

                <button> Submit </button>
                <button onClick={() => setWriting(false)}> Cancel </button> 
            </AddItemForm>}
        </div>
    )
}

export default Menu;
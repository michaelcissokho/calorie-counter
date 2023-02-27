import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateMenu } from '../actions/menuActions';
import { isEqual } from 'lodash';

const EditMenuItem = () => {
    const item = useSelector(state => state.menu.itemInEdit, isEqual)

    const INITIAL_STATE = {'name': item.name, 'unit': item.unit, 'calories': item.calories, 'protein': item.protein, 'carbs': item.carbs}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()

        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateMenu(formData, item._id))
        navigate('/menu')
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name </label>
                <input name="name" value={formData.name} onChange={handleChange}/>
                <br></br>

                <label> Unit </label>
                <input name="unit" value={formData.unit} onChange={handleChange}/>
                <br></br>

                <label> Calories </label>
                <input name="calories" value={formData.calories} onChange={handleChange}/>
                <br></br>

                <label> Protein </label>
                <input name="protein" value={formData.protein} onChange={handleChange}/>
                <br></br>
                
                <label> Carbs </label>
                <input name="carbs" value={formData.carbs} onChange={handleChange}/>
                <br></br>

                <button> Submit </button>
            </form>
            <button> <Link to="/menu" style={{textDecoration:'none', color: 'black'}}> Cancel </Link></button>
        </div>
    )
}

export default EditMenuItem;
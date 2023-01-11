import './App.css';
import Meal from './pages/Meal';
import MealHistory from './pages/MealHistory';
import Menu from './pages/Menu';
import { Route, Routes, Link } from 'react-router-dom';
import EditMenuItem from './components/EditMenuItem';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"> Start A Meal </Link><br></br>
        <Link to="/menu"> View Menu </Link><br></br>
        <Link to="/saved-meals"> Meal History </Link><br></br>
      </nav>
      <Routes>
        <Route exact path="/" element={<Meal/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/saved-meals" element={<MealHistory/>}/>
        <Route exact path="/edit-menu-item" element={<EditMenuItem/>}/>
      </Routes>
    </div>
  );
}

export default App;

import menuReducer from './menuReducer';
import mealReducer from './mealReducer';
import summaryReducer from './summaryReducer';
import { configureStore } from '@reduxjs/toolkit';
import savedMealReducer from './savedMealReducer';

const rootReducer = configureStore({
    reducer: {
        meal: mealReducer,
        menu: menuReducer,
        summary: summaryReducer,
        mealHistory: savedMealReducer
    }
})

export default rootReducer;
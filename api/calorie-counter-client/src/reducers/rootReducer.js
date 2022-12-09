import menuReducer from './menuReducer';
import mealReducer from './mealReducer';
import summaryReducer from './summaryReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = configureStore({
    reducer: {
        meal: mealReducer,
        menu: menuReducer,
        summary: summaryReducer,
    }
})

export default rootReducer;
import {ADD_TO_SUMMARY, REMOVE_FROM_SUMMARY} from '../constants/summaryConstants';
const INITIAL_STATE = {summary: {'calories':0, 'protein': 0, 'carbs': 0}}

function summaryReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ADD_TO_SUMMARY:
            let addedItem = action.item

            let {calories, protein, carbs} = state.summary;
            calories+=addedItem.calories;
            protein+=addedItem.protein;
            carbs+=addedItem.carbs;

            return{...state, summary:{'calories': Math.round(calories), 'protein': Math.round(protein), 'carbs': Math.round(carbs)}};

        case REMOVE_FROM_SUMMARY:
            let removedItem = action.item

            let cals = state.summary.calories;
            let pro = state.summary.protein;
            let crbs = state.summary.carbs;

            cals-=removedItem.calories;
            pro-=removedItem.protein;
            crbs-=removedItem.carbs;

            return{...state, summary:{'calories':Math.round(cals), 'protein':Math.round(pro), 'carbs': Math.round(crbs)}};

        default:
            return state;
    }
}

export default summaryReducer;
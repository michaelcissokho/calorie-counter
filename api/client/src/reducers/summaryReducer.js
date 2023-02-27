import {ADD_TO_SUMMARY, REMOVE_FROM_SUMMARY, RESET_SUMMARY} from '../constants/summaryConstants';
const INITIAL_STATE = {summary: {'calories':0, 'protein': 0, 'carbs': 0}}

function summaryReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case ADD_TO_SUMMARY:
            let {calories, protein, carbs} = action.item

            let s = {...state.summary}

            s.calories+=calories;
            s.protein+=protein;
            s.carbs+=carbs;

            return{...state, summary: s};

        case REMOVE_FROM_SUMMARY:
            let item = action.item

            let s_ = {...state.summary}

            s_.calories-=item.calories;
            s_.protein-=item.protein;
            s_.carbs-=item.carbs;

            return{...state, summary: s_};

        case RESET_SUMMARY:

            return INITIAL_STATE;
            
        default:
            return state;
    }
}

export default summaryReducer;
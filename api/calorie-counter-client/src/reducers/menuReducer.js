import {PULL_MENU} from '../constants/menuConstants';
const INITIAL_STATE = {menu: []}


function menuReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case PULL_MENU:
            return {...state, menu: action.menu}
        default:
            return state
    }
};

export default menuReducer;
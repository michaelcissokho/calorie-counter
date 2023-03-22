import {SET_MENU, EDIT_MENU_ITEM, REMOVE_ITEM_FROM_EDIT, CHANGE_FOOD_ITEM, START_FROM_THE_TOP} from '../constants/menuConstants';
const INITIAL_STATE = {menu: [], itemInEdit: {}, foodItem: {}}


function menuReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_MENU:
            return {...state, menu: action.menu, foodItem: action.menu[0] }
        case EDIT_MENU_ITEM:
            return {...state, itemInEdit: action.item }
        case REMOVE_ITEM_FROM_EDIT:
            return {...state, itemInEdit: {} }
        case CHANGE_FOOD_ITEM:
            return {...state, foodItem: action.newItem}
        case START_FROM_THE_TOP:
            return {...state, foodItem: state.menu[0]}
        default:
            return state;
    }
};

export default menuReducer;
import {PULL_MENU, EDIT_MENU_ITEM, REMOVE_ITEM_FROM_EDIT, CHANGE_FOOD_ITEM} from '../constants/menuConstants';
const INITIAL_STATE = {menu: [], itemInEdit: {}, foodItem: {}}


function menuReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case PULL_MENU:
            return {...state, menu: action.menu, foodItem: action.menu[0] }
        case EDIT_MENU_ITEM:
            return {...state, itemInEdit: action.item, foodItem: action.menu[0] }
        case REMOVE_ITEM_FROM_EDIT:
            return {...state, itemInEdit: {}, foodItem: action.menu[0] }
        case CHANGE_FOOD_ITEM:
            return {... state, foodItem: action.newItem}
        default:
            return state;
    }
};

export default menuReducer;
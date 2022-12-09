import {ADD_ITEM, REMOVE_ITEM} from '../constants/mealConstants';

export function addItem(item){
    return (
        {
            type: ADD_ITEM,
            item
        }
    )
};

export function removeItem(id){
    return (
        {
            type: REMOVE_ITEM,
            id
        }
    )
};
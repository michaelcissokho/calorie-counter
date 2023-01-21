import { ADD_TO_SUMMARY, INDUCT_SAVED_SUMMARY, REMOVE_FROM_SUMMARY } from "../constants/summaryConstants";

export function addToSummary(item){
    return(
        {
            type: ADD_TO_SUMMARY,
            item
        }
    )
}

export function removeFromSummary(item){
    return(
        {
            type: REMOVE_FROM_SUMMARY,
            item
        }
    )
}

export function inductSavedSummary(summary){
    const {calories, protein, carbs} = summary
    
    return(
        {
            type: INDUCT_SAVED_SUMMARY,
            calories,
            protein,
            carbs
        }
    )
}
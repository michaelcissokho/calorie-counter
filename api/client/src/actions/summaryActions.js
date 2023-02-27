import { ADD_TO_SUMMARY, REMOVE_FROM_SUMMARY, RESET_SUMMARY } from "../constants/summaryConstants";

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

export function resetSummary(){
    return(
        {
            type: RESET_SUMMARY
        }
    )
}
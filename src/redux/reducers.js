import { CURRENT_CP, CURRENT_CP_TEST, CURRENT_INFO, CURRENT_TASK , CURRENT_TOPIC , NEXT_MCQ  } from "./actions";

const initialState = {
    currentTask : "Task-01",
    currentTopic : 1, 
    currentCp : 0 , 
    currentCpTest : 'tf-list',
    currentInfo : 1 ,
    currentMcq : 0,
    isMcq : false
}

export const reducers = (state = initialState , action) => {
    switch(action.type){
        case CURRENT_TASK:
            return{
                ...state,
                currentTask : action.payload
            }
        case CURRENT_TOPIC:
            return{
                ...state,
                currentTopic : action.payload  ,
                currentCp : 0,
                currentCpTest : 'tf-list',
                currentInfo : 1,
                currentMcq :  0,
                isMcq:false
            }
        case CURRENT_INFO:
            
            return{
                ...state,
                currentInfo : action.payload
            }
        case CURRENT_CP:
            if(state.currentCp === 3){
                return{
                    ...state,
                    currentInfo : state.currentInfo + 1,
                    currentMcq : state.currentInfo === 3 ? 1: 0,
                    currentCpTest : 'tf-list',
                    isMcq : state.currentInfo === 3
                }
            }
            
            return{
                ...state,
                currentCp : state.currentCp + 1
            }
        case NEXT_MCQ:
            //console.log(state.maxLimit)
            
                return{
                    ...state,
                    currentMcq : state.currentMcq + 1
                }
            
        case CURRENT_CP_TEST:
                return{
                    ...state,
                    currentCpTest : action.payload,
                    currentMcq : 0
                }
        default:
            return state
    }
}
import { CURRENT_CP, 
        CURRENT_CP_TEST, 
        CURRENT_INFO, 
        CURRENT_TASK , 
        CURRENT_TOPIC , 
        NEXT_MCQ  ,
        MCQ_CHOICES,
        CODE_EDITOR_VISIBLE
    } from "./actions";

const initialState = {
    currentTask : "Task-01",
    currentTopic : 1, 
    currentCp : 0 , 
    currentCpTest : 'content-list',
    currentInfo : 1 ,
    currentMcq : 1,
    isMcq : true,
    mcqChoices : null,
    isEditorVisible : false
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
        case MCQ_CHOICES:
            return{
                ...state,
                mcqChoices : action.payload
            }
        case CODE_EDITOR_VISIBLE:
            return{
                ...state ,
                isEditorVisible : !state.isEditorVisible
            }
        default:
            return state
    }
}
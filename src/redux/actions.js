export const CURRENT_TASK = 'CURRENT_TASK';
export const CURRENT_TOPIC = 'CURRENT_TOPIC';
export const CURRENT_INFO = 'CURRENT_INFO';
export const CURRENT_CP = 'CURRENT_CP';
export const NEXT_MCQ = 'NEXT_MCQ';
export const MAX_LIMIT = 'MAX_LIMIT';
export const CURRENT_CP_TEST = 'CURRENT_CP_TEST';
export const MCQ_CHOICES = 'MCQ_CHOICES';
export const CODE_EDITOR_VISIBLE = 'CODE_EDITOR_VISIBLE'

export const setCurrentTask = ( task ) => ({
    type : CURRENT_TASK,
    payload : task
});

export const setCurrentTopic = ( topic ) => ({
    type : CURRENT_TOPIC,
    payload : topic
});

export const setCurrentInfo = ( info ) => ({
    type : CURRENT_INFO,
    payload : info
});

export const setCurrentCpIndex = () =>({
    type : CURRENT_CP
})

export const setCurrentCPTest = (cpTest) => ({
    type : CURRENT_CP_TEST,
    payload : cpTest
})

export const nextMcq = () => ({
    type : NEXT_MCQ
});

export const setMcqChoices = (choices) => ({
    type : MCQ_CHOICES,
    payload : choices
});

export const setCodeEditorVisible = () => ({
    type : CODE_EDITOR_VISIBLE
})




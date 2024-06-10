import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTask, setCurrentTopic } from '../redux/actions';

const Mcq = ({ mcqContent }) => {
    const currentMcqId = useSelector(state => state.currentMcq);
    const currentTopic = useSelector(state => state.currentTopic);
    const dispatch = useDispatch();
    
    const currentMcq = mcqContent.find(mcq => mcq['mcq-order'] === currentMcqId);

    useEffect(() => {
        if (!currentMcq) {
            dispatch(setCurrentTopic(currentTopic + 1));
        }
    }, [currentMcq, currentTopic, dispatch]);

    if(!currentMcq){
        return null;
    }
    return (
        <div>
            
           
                <div className='my-4'>
                    <p className='bg-purple-600 text-white' dangerouslySetInnerHTML={{ __html: currentMcq.question }}></p>
                    <ol className='list-decimal pl-5'>
                        {currentMcq.content.map((sentence) => (
                            <li className='' key={sentence.order}>{sentence.sentence} </li>
                        ))}
                    </ol>
                    {currentMcq['answer-List'].map((answer, key) => (
                        <div className='flex flex-row gap-2' key={key}>
                            <input type="radio" name={currentMcq.question} value={answer.content} />
                            <label htmlFor={answer.content}>{answer.content}</label>
                        </div>
                    ))}
                </div>
          
        </div>
    );
};

export default Mcq;

import React, { useState } from 'react'
import Topic from './Topic';
import { useSelector , useDispatch } from 'react-redux';
import { setCurrentTask } from '../redux/actions';



const Task = ({data}) => {
    const dispatch = useDispatch()
    const currentTask = useSelector(state => state.currentTask);

  return (
    <div className='w-full flex flex-col items-center h-full '>

        {Object.entries(data).map(([key,value ], index) => {
            if(key.startsWith('Task')){
                return(
                    <>
                        {/* <div className='w-[15%] h-full  border-0 border-r-2'>
                            <button onClick={()=> {dispatch(setCurrentTask(key))}} className='w-full text-left py-2 px-10 bg-slate-500 hover:bg-slate-700 text-white text-xl'>
                                {key}
                            </button>
                          
                        </div> */}

                        <div className='w-[100%] h-full'>
                            {key=== currentTask && 
                                <Topic task={data[currentTask]}/>
                            }
                        </div>
                    </>
                )
            }
            return null
        })}
        </div>
        
     
  )
}

export default Task
import React, { useState } from 'react'
import Info from './Info';
import { useSelector } from 'react-redux';

const Topic = ({task}) => {
  
  const currentTopic = useSelector(state => state.currentTopic);
  return (
    <div className='w-full h-full flex flex-col p-2 overflow-y-auto text-left'>
      {/* <div className='text-left'>
        <p className='font-bold'>{task.title}</p>
        <pre className='text-wrap'>{task.summary}</pre>
      </div> */}
      {Object.entries(task).map(([key,value] , index) => {
          if(key.startsWith('Topic') && key === `Topic-0${currentTopic}`){
            return(
             
              <Info topic={task[`Topic-0${currentTopic}`]}/>
            
            )
          }
          return null
        })}
    </div>
  )
}

export default Topic
import React, { useState } from 'react'
import InfoContent from './InfoContent';
import Mcq from './Mcq';
import { useSelector } from 'react-redux';

const Info = ({topic}) => {
    const{ currentInfo , isMcq }= useSelector(state => state);
    // const renderInfo = () => {
    //     const filteredData = topic[activeInfo];
    //     return filteredData.map((item, index) => {
    //     switch(activeInfo){
    //         case "info-1" ,  "info-2" ,  "info-3":
    //             return <InfoContent info={filteredData}/>;
    //         default:
    //             return null;
    //     }
    // })
    // }

  return (
    <>
        <div className="flex-row flex w-full justify-between">
            <p className='font-bold font-bold bg-gradient-to-r from-red-600 to-purple-500 inline-block text-transparent bg-clip-text'>{topic.topic}</p>
            <p className='font-bold bg-gradient-to-r from-red-600 to-purple-500 inline-block text-transparent bg-clip-text'>Info -{currentInfo}</p>
        </div>
        
        {/* {renderInfo()} */}
        {Object.entries(topic).map(([key,value],index) => {
            if(isMcq){
                return key.startsWith('mcq') &&<Mcq mcqContent={topic['mcq-list']} />
            }
            else if(key.startsWith('info') && `info-${currentInfo}` === key){
                return <InfoContent info={topic[`info-${currentInfo}`]} />
            }
            return null
        })}
    </>
  )
}

export default Info
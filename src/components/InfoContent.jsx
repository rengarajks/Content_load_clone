import React, { useEffect, useState } from 'react'
import CurrentCp from './CurrentCp';
import { useSelector } from 'react-redux';

const InfoContent = ({info}) => {
  const currentCp = useSelector(state => state.currentCp);


  return (
    <>
        <p className='font-bold bg-gradient-to-r from-red-600 to-purple-500 inline-block text-transparent bg-clip-text'>{info['info-title']}</p>
        <p>{info['info-notes']}</p>
        <CurrentCp cpData={info['cp-List'][currentCp]} />
    </>
  )
}

export default InfoContent
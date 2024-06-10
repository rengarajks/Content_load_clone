import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setCurrentTask } from '../redux/actions';
import {data} from '../data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sidebar() {
    const dispatch = useDispatch()
    const currentTask = useSelector(state => state.currentTask);
  return (
    <div className='w-fulll  border-r-2 h-full text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 mx-2 rounded-md'>

{Object.entries(data).map(([key,value ], index) => {
            if(key.startsWith('Task')){
                return(
                    <>
                        <div className='bg-gradient-to-r from-blue-800 to-pink-400 text-white hover:from-pink-400 hover:to-blue-800 text-white rounded-md w-[20vh] px-4 py-2 flex justify-between'>

                           <div>
                           <button onClick={()=> {dispatch(setCurrentTask(key))}} className='font-md'>
                                {key}
                            </button>
                           </div>
                          <div><ArrowForwardIosIcon style={{width:'15px'}}/></div>
                        </div>

                    </>
                )
            }
            return null
        })}
                              
    </div>
  )
}

export default Sidebar
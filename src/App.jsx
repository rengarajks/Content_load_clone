import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { useEffect, useState } from 'react';
import Task from './components/Task';
import { useDispatch, useSelector } from 'react-redux';
import { nextMcq } from './redux/actions';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import robo from './robo.png'

function App() {
  const dispatch = useDispatch();
  const {currentCpTest , currentTask , currentTopic, currentInfo ,isMcq} = useSelector(state => state)
  return (
    <div className="App flex flex-col bg-black/90 h-[100vh]">
 
      <div className='w-full '>
        <Navbar/>
      </div>

       
       <div className='flex h-[90vh] '>
       <div>
        <Sidebar/>
       </div>

        
        <div className='flex flex-col mx-4 my-8 gap-4'>
          
    {/* Content */}
    <div className='absolute  h-[10vh] bottom-[80vh] left-[23vh] z-[10]'><img className='w-[50px]'  src={robo}/></div>
      <div className='w-full rounded-md p-4 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 overflow-auto '>
      
        <Task data={data} />
      </div>

      {/* Bottom section */}
      <div className='w-full h-[25vh]  flex flex-row items-center justify-between p-4 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 rounded-md'>
        <div>
          <p>{currentTask}</p>
          <p>Topic - {currentTopic}</p>
          <p>{isMcq ? 'mcq-list' : `${currentCpTest} info-${currentInfo}`}</p>
         
        </div>
        
        <button  onClick={()=> dispatch(nextMcq())} className='bg-purple-600 text-white px-4 py-1 rounded-md shadow-md'>Next</button>
      </div>
        </div>
       </div>





    </div>
  );
}

export default App;

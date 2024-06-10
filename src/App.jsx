import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';
import Task from './components/Task';
import { useDispatch, useSelector } from 'react-redux';
import { nextMcq, setCodeEditorVisible } from './redux/actions';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import robo from './robo.png';

function App() {
  const dispatch = useDispatch();
  const { currentCpTest, currentTask, mcqChoices, isEditorVisible, currentTopic, currentInfo, isMcq } = useSelector(state => state);
  const [boolean, setBoolean] = useState(null);
  const [fillUp, setFillup] = useState('');
  const [mcq, selectMcq] = useState('');
  const [bugline, setBugLine] = useState(null);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [currentTask, isMcq, mcqChoices, currentCpTest, boolean, fillUp, mcq, bugline]); // Adjust dependencies as necessary

  const moveToNextPage = () => {
    setBoolean(null);
    setFillup('');
    selectMcq('');
    setBugLine(null);
    dispatch(nextMcq());
  };

  return (
    <div className="App flex flex-col bg-black/90 h-[100vh]">
      <div className='w-full '>
        <Navbar />
      </div>

      <div className='flex h-[90vh] '>
        <div>
          <Sidebar />
        </div>

        <div className='flex flex-col w-full mx-4 my-8 gap-4'>
          <div className='flex flex-row w-full justify-end'>
            <button onClick={() => dispatch(setCodeEditorVisible())}
              className={`text-white ${isEditorVisible ? 'bg-slate-400 text-black' : 'bg-purple-800'} rounded-md px-4 py-1`}>
              Code Editor
            </button>
          </div>
          <div className='absolute  h-[10vh] bottom-[80vh] left-[23vh] z-[10]'>
            <img className='w-[50px]' src={robo} alt='robo' />
          </div>
          {isEditorVisible ?
            <div>
              <div className='w-[85vw] h-[80vh] rounded-md p-4 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 overflow-auto'>
                <p className='text-xl text-purple-600'>Code Editor</p>
              </div>
            </div>
            :
            <>
              {/* Content */}
              <div ref={scrollContainerRef} className='w-[85vw] h-[80vh] rounded-md p-4 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 overflow-auto'>
                <Task data={data} />
              </div>

              {/* Bottom section */}
              <div className={`w-full h-[30vh] flex flex-row items-center ${currentCpTest === "content-list" ? 'justify-end' : 'justify-between'} p-4 text-white shadow-xl border-2 border-slate-500/10 backdrop-blur-sm bg-slate-600/20 rounded-md`}>
                {isMcq &&
                  <div>
                    {mcqChoices && mcqChoices['answer-List'].map((answer, key) => (
                      <div className='flex flex-row gap-2' key={key}>
                        <input type="radio" name={mcqChoices.question} onClick={(e) => selectMcq(e.target.value)} value={answer.content} />
                        <label htmlFor={answer.content}>{answer.content}</label>
                      </div>
                    ))}
                  </div>
                }

                {currentCpTest === 'tf-list' && !isMcq &&
                  <div className='flex flex-row gap-2'>
                    <button onClick={() => setBoolean(true)} className={`px-4 py-1 border border-white ${boolean === true && 'bg-[#9333EA]'} rounded-md text-white`}>True</button>
                    <button onClick={() => setBoolean(false)} className={`px-4 py-1 border border-white ${boolean === false && 'bg-[#9333EA]'} rounded-md text-white`}>False</button>
                  </div>
                }
                {currentCpTest === 'fb-list' &&
                  <div>
                    <input value={fillUp}
                      onChange={(e) => setFillup(e.target.value)}
                      type="text" placeholder='Enter answer here'
                      className='bg-slate-800 outline-none p-2 rounded-lg text-white' />
                  </div>
                }

                {currentCpTest === 'bug-list' &&
                  <div>
                    <input type="number"
                      value={bugline}
                      onChange={(e) => setBugLine(e.target.value)}
                      placeholder='Identify the bug line'
                      className='bg-slate-800 outline-none p-2 rounded-lg text-white' />
                  </div>
                }
                <button
                //  disabled={currentCpTest !== 'content-list' && bugline === null && mcq === '' && fillUp === '' && boolean === null} 
                 onClick={moveToNextPage}
                  className={`disabled:bg-gray-700 bg-purple-800 text-white px-4 py-1 rounded-md shadow-lg`}>
                  Next
                </button>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;

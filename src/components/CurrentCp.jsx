import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { maxLimit, setCurrentCPTest, setCurrentCpIndex } from '../redux/actions';
import Typer from '../utils/Typer';

const CurrentCp = ( { cpData } ) => {
    const { currentCpTest, currentMcq  } = useSelector(state => state);
    const dispatch = useDispatch();
    

    const renderContentList = () => {
        const contentListData = cpData[currentCpTest];
        if(contentListData.length < currentMcq){
            dispatch(setCurrentCPTest('tf-list'));
            dispatch(setCurrentCpIndex());
        }
        return (
            <div className='my-4'>
                {contentListData.slice(0, currentMcq + 1).map((item, index) => (
                    // <p
                    //     key={index}
                    //     dangerouslySetInnerHTML={{ __html: item.value }}
                    //     className={`${item.type === "SUB-TOPIC" && 'bg-purple-500 text-white font-bold p-2'}`}
                    // ></p>
                    <div className={`${item.type === "SUB-TOPIC" && 'bg-purple-500 text-white font-bold p-2'}`}>
                        <Typer sentence={item.value} />
                    </div>
                    
                ))}
            </div>
        );
    };

    const renderTest = () => {
        const testData = cpData[currentCpTest][currentMcq];

        switch (currentCpTest) {
            case "content-list":
                return renderContentList();
            case "tf-list":
                if(!testData){
                    dispatch(setCurrentCPTest('fb-list'));
                    return null;
                    
                }
                return (
                    <div className='my-4'>
                        
                        <p className='bg-purple-600 text-white'>{testData['tf']}</p>
                        {/* <div className='flex flex-row items-center gap-4'>
                            <div className='flex flex-row'>
                                <input type="radio" name={testData['tf']} value={true} />
                                <label htmlFor={testData['tf']}>True</label>
                            </div>
                            <div className='flex flex-row'>
                                <input type="radio" id={testData['tf']} name={testData['tf']} value={false} />
                                <label htmlFor={testData['tf']}>False</label>
                            </div>
                        </div> */}
                    </div>
                );
            case "fb-list":
                if(!testData ){
                    if('bug-list' in cpData ){
                        dispatch(setCurrentCPTest('bug-list'));
                        return null;
                    }
                    else{
                        dispatch(setCurrentCPTest('content-list'));
                        return null;
                    }
                }
                return (
                    <div className='my-4'>
                        <div className='flex flex-row bg-purple-600 text-white'>
                            <p className='bg-purple-600' dangerouslySetInnerHTML={{ __html: testData['fb'].replace("<blank>", "______________") }}></p>
                            <p className=''> - {testData['type']}</p>
                        </div>
                    </div>
                );
            case "bug-list":
                if(!testData){
                    dispatch(setCurrentCPTest('content-list'));
                    return null;
                    // return(
                    //     <p>No Bug</p>
                    // )
                }
                return (
                    <div className='my-4'>
                        <p>{testData.question}</p>
                        <div className='w-full bg-black text-white p-4'>
                             <pre>{testData.code}</pre>
                        </div>
                        <p>Output</p>
                        <div className='w-full bg-black text-white p-4'>
                             <pre>{testData.output}</pre>
                        </div>
                        {/* <div className="flex flex-row my-2">
                            Find the bug line : <input type="number" className='bg-transparent border-b-2 border-black outline-none' />
                        </div> */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderTest()}
        </div>
    );
};

export default CurrentCp;

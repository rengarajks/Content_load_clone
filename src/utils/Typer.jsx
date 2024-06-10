import React, { useEffect, useState } from 'react'

const Typer = ({sentence}) => {
    const[typingValue , setTypingValue] = useState('');
    const[index , setIndex] = useState(0);
    const length = sentence.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === length) {
                    clearInterval(interval);
                    return prevIndex;
                }
                setTypingValue((prevValue) => prevValue + sentence[prevIndex]);
                return prevIndex + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [length, sentence]);
    



  return (
    <p 
            dangerouslySetInnerHTML={{ __html : typingValue}}>

    </p>
  )
}

export default Typer
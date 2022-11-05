import React, { useEffect, useState } from 'react'

function Timer() {
    const [number, setNumber] = useState(0);



    useEffect(()=>{
        const interval = setInterval(()=>{
            setNumber((number)=>{
                console.log("number: ", number)
                return (number + 1);
            })
    
        }, 1000)
    
        return () =>{
            clearInterval(interval);
        }
    
    }, []);
    
  return (
    <div>{ number }</div>
  )
}

export default Timer
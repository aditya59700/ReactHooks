import React, { useState } from 'react'

const UseStateHook = () => {
    const [data,setData]= useState("Adi");
    const [count,setCount]= useState(0);

    function incrementFive  ()  {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)        
        }
    }
  return (
    <div>
        <h3>{data}</h3>
      <button onClick={() => setData("Om")}>Click me</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count => count+1)}>Click me</button>
      <button onClick={incrementFive}>Click me for 5</button>
    </div>
  )
}

export default UseStateHook

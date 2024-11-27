import React, { useEffect, useState } from 'react'

const UseEffectHook2 = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    const clickHandle = () => {
        setCount(count => count +1)
    }

    useEffect(()=>{
        console.log("Updating component")
        document.title = `Clicked ${count} times`
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={clickHandle}>Click me {count}</button>
        <input type='text' value={name} onChange={(event) => {setName(event.target.value)}} />
    </div>
  )
}

export default UseEffectHook2

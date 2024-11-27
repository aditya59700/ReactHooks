import React from 'react'

const ChildComponent = ({greetHandler, name}) => {
  return (
    <div>
      {/* <button onClick={() => greetHandler("Aditya")}>click</button> */}
      <button onClick={() => greetHandler("Aditya")}>{name}</button>
    </div>
  )
}

export default ChildComponent

import React from 'react'

const Greet = (props) => {
    let {id,name,game} = props
  return (
    <div>
      {/* <h2>Greetings from {props.name}, Welcome to the Game {props.game}!!</h2> */}
      <h2>Greetings from {id} {name}, Welcome to the Game {game}!!</h2>
        {props.children}
    </div>
  )
}

export const GameTest = () => {
    return (
      <div>
        <h2>Game will start soon!!</h2>
      </div>
    )
  }

export default Greet



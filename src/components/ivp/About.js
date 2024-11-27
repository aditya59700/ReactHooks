import React, { useContext } from 'react'
import { nameData } from '../../App'

const About = () => {
  const name = useContext(nameData)
  return (
    <div>
      <h1>IVP about</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default About

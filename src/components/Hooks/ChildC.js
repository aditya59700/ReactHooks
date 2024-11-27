import React, { useContext } from 'react'
import { nameData,skillsData } from '../../App'

const ChildC = () => {
    const name = useContext(nameData)
    const skills = useContext(skillsData)
  return (
    <div>
      <h2>ChildC</h2>
        <h2>{name} - {skills}</h2>
    </div>
  )
}

export default ChildC

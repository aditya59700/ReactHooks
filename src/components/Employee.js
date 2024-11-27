import React from 'react'

const Employee = ({emp}) => {
  return (
    <div>
      <h2>{emp.name} works on {emp.skill} with salary {emp.salary}</h2>
    </div>
  )
}

export default Employee

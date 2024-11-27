import React from 'react'
import Employee from './Employee'

const NameList = () => {
    const names = ["Adi" , "Nikhil", "Aryan"]
    const employees = [
        {
            id : 10,
            name : "Nikhil",
            salary : "83937",
            skill : "SQL"
        },
        {
            id : 20,
            name : "Aditya",
            salary : "180937",
            skill : "React"
        },
        {
            id : 30,
            name : "Om",
            salary : "63937",
            skill : "Asp Dot Net"
        }
    ]
  return (
    <div>
      {/* {names.map((name,index) => <h2 key={index} > {name}</h2>)}
      {employees.map((emp) =>  <h2 key={emp.id}>{emp.name} works on {emp.skill} with salary {emp.salary}</h2>)} */}
      {employees.map((emp) => <Employee key={emp.id} emp = {emp} />)}
      
    </div>
  )
}

export default NameList

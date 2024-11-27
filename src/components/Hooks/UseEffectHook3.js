import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UseEffectHook3 = () => {
    const [id,setId] = useState("1")
    const [users,setUsers] = useState([])
    const [emp,setEmp] = useState({})
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         setUsers(res.data)
    //         console.log(users)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])

    
    //     useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    //     .then(res => {
    //         setEmp(res.data)
    //         console.log(emp)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[id])

    const handleClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => {
            setEmp(res.data)
            console.log(emp)
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
        <input type='text' value={id} onChange={(e) => {setId(e.target.value)}} />
        <button onClick={handleClick}>Get</button>
        <h3 key={emp.id}>{emp.id} - {emp.name} - {emp.email}</h3>
      {/* {
        users.map((user) => <h2 key={user.id} >{user.name}</h2>)
      } */}
    </div>
  )
}

export default UseEffectHook3

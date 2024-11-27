import React, { useState } from 'react'

const UseStateHook2 = () => {
    const [name,setName] = useState({fname: "",lname:""})
  return (
    <div>
      <form>
        {/* if we dont write ...name the old state is not persisted and every time we enter input the state is refreshed */}
        First NAme: <input type='text' value={name.fname} name='fname' 
                      onChange={e => setName({...name,fname : e.target.value})}  />
        Last Name: <input type='text' value={name.lname} name='lname' 
                      onChange={e => setName({...name, lname : e.target.value})}  />

        <h2>First NAme: {name.fname}</h2>
        <h2>Last NAme:{name.lname}</h2>
      </form>
    </div>
  )
}

export default UseStateHook2

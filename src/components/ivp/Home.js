import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>IVP Homepage</h1>
      <button onClick={() => navigate('order')} >Clcik to view Orders</button>
    </div>
  )
}

export default Home

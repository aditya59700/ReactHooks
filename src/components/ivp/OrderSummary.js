import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigtate = useNavigate()
  return (
    <div>
      <h2>OrderSummary</h2>
      <button onClick={() => navigtate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary

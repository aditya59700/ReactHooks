import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navlinkstyle = ({isActive}) => {
        return{
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

  return (
    <div>
      <nav>
        <NavLink style={navlinkstyle} to="/">Home</NavLink>
        <NavLink style={navlinkstyle} to="/about">About</NavLink>
        <NavLink style={navlinkstyle} to="/contact">Contact</NavLink>
        <NavLink style={navlinkstyle} to="/getusers">Get Users</NavLink>
        <NavLink style={navlinkstyle} to="/product">Products</NavLink>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <div className="link-container">
        <Link className="nav-link" to="/">Home</Link>
        <div className="split"> / </div>
        <Link className="nav-link" to="/terms">Terms of Service</Link>
      </div>
    </div>
  )
}

export default Header
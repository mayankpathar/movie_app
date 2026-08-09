import React from 'react'
import { Link } from 'react-router-dom'

function Menubar() {
  return (
    <>
      <ul className="nav-menu" id="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">ALL</Link></li>
        <li><Link to="/my-list">My lists</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/toprated">Top Rate</Link></li>
        <li>
          <Link to="/sign" className="btn btn-hover">
            <span>Sign in</span>
          </Link>
        </li>
      </ul>
      {/* MOBILE MENU TOGGLE */}
      <div className="hamburger-menu" id="hamburger-menu">
        <div className="hamburger"></div>
      </div>
    </>
  )
}

export default Menubar

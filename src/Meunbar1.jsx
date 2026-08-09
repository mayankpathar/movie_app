import React from 'react'
import { Link } from 'react-router-dom'


function Meunbar1() {
  return (
    <nav className="meunbar1">
      <ul className="meunbar-list" id="nav-menu">
        <li className="meun-left"><Link to="/movies">movies</Link></li>
        <li className="meun-center"><Link to="/series">series</Link></li>
        <li className="meun-right"><Link to="/animes">anime</Link></li>
      </ul>
    </nav>
  )
}

export default Meunbar1

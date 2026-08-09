import React from 'react'
import { Link } from 'react-router-dom'

function Logoapp() {
  return (
    <Link to="/" className="logo">
                    <i className='bx bx-movie-play bx-tada main-color'></i>Phoe<span className="main-color">nix</span>Zone
                </Link>
  )
}

export default Logoapp

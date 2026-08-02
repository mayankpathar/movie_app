import React from 'react'

function Header() {
  return (
    
      
 <div class="nav-wrapper">
        <div class="container">
            <div class="nav">
                <a href="#" class="logo">
                    <i class='bx bx-movie-play bx-tada main-color'></i>Phoe<span class="main-color">nix</span>Zone
                </a>
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Genre</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#" class="btn btn-hover">
                            <span>Sign in</span>
                        </a>
                    </li>
                </ul>
              
                <div class="hamburger-menu" id="hamburger-menu">
                    <div class="hamburger"></div>
                </div>
            </div>
        </div>
    </div>

 
  )
}

export default Header

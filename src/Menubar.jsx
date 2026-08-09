import React from 'react'

function Menubar() {
  return (
    <>
      <ul class="nav-menu" id="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">ALL</a></li>
                    <li><a href="#">My lists</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">Top Rate</a></li>
                    <li>
                        <a href="#" className="btn btn-hover">
                            <span>Sign in</span>
                        </a>
                    </li>
                </ul>
              {/* MOBILE MENU TOGGLE */}
                <div class="hamburger-menu" id="hamburger-menu">
                    <div class="hamburger"></div>
                </div>
    </>
  )
}

export default Menubar

import { useEffect, useState } from 'react'

export default function Navbar(props) {

  useEffect(() => {
    let element = document.getElementById("main-navbar");
    if(props.show){
      element.className = "navbar-default sticky-header"
    }else{
      element.className = "navbar-default navbar-initial"
    }
  }, [props.show])

  return (
    
    <header id="main-header">
      <nav id="main-navbar" className="navbar-default navbar-initial">
        {/*logo start*/}
        <a href="#" id="main-logo">
          Art Factory
        </a>
        {/*logo end*/}
        {/*menu start*/}
        <ul className="menu">
          <li>
            <a className="menu-items" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="menu-items" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="menu-items" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="menu-items" href="#home">
              Frequently Questions
            </a>
          </li>
          <li className="submenu-list">
            <a className="menu-items anchorSub" href="javascript:;">
              Drop Down
            </a>
            <ul className="submenu">
              <li className="submenu-list-item">
                <a className="submenu-anchor-item" href="">
                  About Us
                </a>
              </li>
              <li className="submenu-list-item">
                <a className="submenu-anchor-item" href="">
                  Features
                </a>
              </li>
              <li className="submenu-list-item">
                <a className="submenu-anchor-item" href="">
                  FAQ's
                </a>
              </li>
              <li className="submenu-list-item">
                <a className="submenu-anchor-item" href="">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-items" href="#home">
              Contact Us
            </a>
          </li>
        </ul>

        {/*menu end*/}
      </nav>
    </header>
  
  );
}

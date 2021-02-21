export default function Navbar() {
  return (
    <header id="main-header">
      <nav id="main-navbar">
        {/*logo start*/}
        <a href="#" id="main-logo">
          Art Factory
        </a>
        {/*logo end*/}
        {/*menu start*/}
        <ul id="menu">
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

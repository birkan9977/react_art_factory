


export default function Header(){
  return(
    <header>
      <div className="logo">ART FACTORY</div>
      <nav className="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#home">Frequently Questions</a></li>
            <li className="submenu">
              <a className="anchorSub" href="javascript:;">Drop Down</a>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">FAQ's</a></li>
                <li><a href="">Blog</a></li>
              </ul>
            </li>
            <li><a href="#home">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  )
}
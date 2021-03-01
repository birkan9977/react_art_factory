import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

export default function Navbar(props) {
  useEffect(() => {
    let element = document.getElementById("main-navbar");
    if (props.show) {
      element.className = "navbar-default sticky-header";
    } else {
      element.className = "navbar-default navbar-initial";
    }
  }, [props.show]);

  const [currentLocation, setCurrentLocation] = useState("");
  const [currentWindowLocation, setCurrentWindowLocation] = useState(
    window.location.href
  );

  function handleCurrentLocation(e) {
    setCurrentLocation(e);
    setCurrentWindowLocation(window.location.href);
  }

  useEffect(() => {
    //console.log(currentLocation);
    //console.log("currentWindowLocation", currentWindowLocation);
    const menuItems = document.getElementsByClassName("menu-items");
    //console.log(menuitems)
    let menuItemFound = false;
    for (const item of menuItems) {
      //console.log('item.href',item.href)
      const found = currentWindowLocation === item.href;

      if (found) {
        menuItemFound = found;
        //console.log(item.innerHTML, 'found')
        item.classList.add("active-page");
      } else {
        item.classList.remove("active-page");
      }
    }

    // drop-down sub-menu items
    if (!menuItemFound) {
      const subMenuItems = document.getElementsByClassName(
        "submenu-anchor-item"
      );
      const dropDownMenuItem = document.getElementById("dropDownMenuItem");
      for (const subItem of subMenuItems) {
        const found = currentWindowLocation === subItem.href;
        //console.log("subItem.href", subItem.href);
        if (found) {
          menuItemFound = found;
          //console.log(subItem.innerHTML, "found");
          subItem.classList.add("sub-active-page");
          dropDownMenuItem.classList.add("active-page");
        } else {
          subItem.classList.remove("sub-active-page");
        }
      }
    }
  }, [currentWindowLocation]);

  const handleClick = (e) => {
    //console.log(e.target.innerHTML)
    const clickedItem = e.target.innerHTML;
    const element = document.getElementById(clickedItem.toLowerCase());

    switch (clickedItem) {
      case "Home":
        window.scroll(0, 0);
        break;

      case "About":
        window.scroll(0, element.offsetTop - 260);
        break;

      case "Services":
        window.scroll(0, element.offsetTop - 460);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <header id="main-header">
        <nav id="main-navbar" className="navbar-default navbar-initial">
          {/*logo start*/}
          <a href="/" id="main-logo">
            Art Factory
          </a>

          {/*logo end*/}
          {/*menu start*/}
          <Router>
            <ul className="menu">
              <li>
                <Link to="/" className="menu-items" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="menu-items" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="menu-items"
                  onClick={handleClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#frequentlyQuestions"
                  className="menu-items"
                  onClick={handleClick}
                >
                  Frequently Questions
                </Link>
              </li>

              <li className="submenu-list">
                <Link
                  to="dropdown"
                  className="menu-items"
                  id="dropDownMenuItem"
                >
                  Drop Down
                </Link>
                <ul className="submenu">
                  <li className="submenu-list-item">
                    <Link
                      to="/dropdown#aboutus"
                      className="submenu-anchor-item"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="submenu-list-item">
                    <Link
                      to="/dropdown#features"
                      className="submenu-anchor-item"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="submenu-list-item">
                    <Link to="/dropdown#faq" className="submenu-anchor-item">
                      FAQ's
                    </Link>
                  </li>
                  <li className="submenu-list-item">
                    <Link to="/dropdown#blog" className="submenu-anchor-item">
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#contact" className="menu-items">
                  Contact Us
                </Link>
              </li>

              <Switch>
                <Route exact path="/">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
                <Route path="#about">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
                <Route path="#services">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
                <Route path="#frequentlyQuestions">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
                <Route exact path="/dropdown">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
                <Route path="#contact">
                  <GetLocation currentPath={(e) => handleCurrentLocation(e)} />
                </Route>
              </Switch>
            </ul>
          </Router>

          {/*menu end*/}
        </nav>
      </header>
    </div>
  );
}

function GetLocation(props) {
  let history = useHistory();
  let currentPath = history ? history.location.pathname : null;
  useRouteMatch();
  useEffect(() => {
    props.currentPath(currentPath);
  });

  return <></>;
}

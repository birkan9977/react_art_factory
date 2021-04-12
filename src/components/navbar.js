import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import clsx from "clsx";

export default function Navbar({ show }) {
  useEffect(() => {
    let element = document.getElementById("main-navbar");
    if (show) {
      element.classList.add("sticky-header");
    } else {
      element.classList.remove("sticky-header");
    }
  }, [show]);

  //const [currentLocation, setCurrentLocation] = useState("");
  const [currentWindowLocation, setCurrentWindowLocation] = useState(
    window.location.href
  );
  const [triggerActive, setTriggerActive] = useState(false);
  const [enlargeDropDown, setEnlargeDropDown] = useState(false);
  function handleCurrentLocation(e) {
    //setCurrentLocation(e);
    setCurrentWindowLocation(window.location.href);
  }

  useEffect(() => {
    //console.log(currentLocation);
    //console.log("currentWindowLocation", currentWindowLocation);
    //console.log("test", window.location.href);
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
    //console.log(e.target);
    const clickedItem = e.target.innerHTML;
    const regex = /\b\s\b/;
    const idCorrectedItem = clickedItem.replace(regex, "_").toLowerCase();
    const element = document.getElementById(idCorrectedItem);
    setTriggerActive(false);
    setEnlargeDropDown(false);

    switch (clickedItem) {
      case "Home":
        window.scroll(0, 0);
        break;

      case "About":
        window.scroll(0, element.offsetTop - 260);
        break;

      case "Services":
        window.scroll(0, element.offsetTop);
        //console.log(element.offsetTop);
        break;

      case "Frequently Questions":
        window.scroll(0, element.offsetTop - 90);
        //console.log(element.offsetTop);
        break;

      case "Contact Us":
        window.scroll(0, element.offsetTop - 80);
        //console.log(element.offsetTop);
        break;

      default:
        break;
    }
  };

  const handleNenuTrigger = () => {
    setTriggerActive(!triggerActive);
  };

  const handleClickDropDown = (evt) => {
    console.log(enlargeDropDown, evt.target.innerHTML);
    if (evt.target.innerHTML === "Drop Down") {
      setEnlargeDropDown(!enlargeDropDown);
    }
  };
  return (
    <nav id="main-navbar" className="navbar-default">
      {/*logo start*/}
      <a href="/" className="main-logo">
        Art Factory
      </a>

      {/*logo end*/}
      {/*menu start*/}
      <Router>
        <div className="menu-container">
          <ul className={clsx("menu", triggerActive && "active-menu")}>
            <li className="menu-list">
              <Link to="/" className="menu-items" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/#about" className="menu-items" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="/#services"
                className="menu-items"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="/#frequentlyQuestions"
                className="menu-items"
                onClick={handleClick}
              >
                Frequently Questions
              </Link>
            </li>

            <li
              className="menu-list submenu-list"
              onClick={handleClickDropDown}
            >
              <Link to="dropdown" className="menu-items" id="dropDownMenuItem">
                Drop Down
              </Link>
              <div className="sub-menu-container">
                <ul className="submenu">
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link
                      to="/dropdown#aboutus"
                      className="submenu-anchor-item"
                    >
                      About Us
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link
                      to="/dropdown#features"
                      className="submenu-anchor-item"
                    >
                      Features
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link to="/dropdown#faq" className="submenu-anchor-item">
                      FAQ's
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link to="/dropdown#blog" className="submenu-anchor-item">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-list">
              <Link to="/#contact" className="menu-items" onClick={handleClick}>
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
        </div>
      </Router>

      {/*menu end*/}
      <div className="menu-trigger" onClick={handleNenuTrigger}>
        <div
          className={clsx(
            "line1",
            show && "sticky-trigger",
            triggerActive && "line1-trigger-active"
          )}
        ></div>
        <div
          className={clsx(
            "line2",
            show && "sticky-trigger",
            triggerActive && "line2-trigger-active"
          )}
        ></div>
        <div
          className={clsx(
            "line3",
            show && "sticky-trigger",
            triggerActive && "line3-trigger-active"
          )}
        ></div>
      </div>
    </nav>
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

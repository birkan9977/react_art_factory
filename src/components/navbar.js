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
import handleScroll from "../data/scroll-data";

export default function Navbar({ showStickyHeader, breakPoints }) {
  const [currentWindowLocation, setCurrentWindowLocation] = useState(
    window.location.href
  );
  const [triggerActive, setTriggerActive] = useState(false);
  const [enlargeDropDown, setEnlargeDropDown] = useState(false);
  function handleCurrentLocation(e) {
    setCurrentWindowLocation(window.location.href);
  }

  useEffect(() => {
    const menuItems = document.getElementsByClassName("menu-items");
    let menuItemFound = false;
    for (const item of menuItems) {
      const found = currentWindowLocation === item.href;

      if (found) {
        menuItemFound = found;
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
        if (found) {
          menuItemFound = found;
          subItem.classList.add("sub-active-page");
          dropDownMenuItem.classList.add("active-page");
        } else {
          subItem.classList.remove("sub-active-page");
        }
      }
    }
  }, [currentWindowLocation]);

  useEffect(() => {
    const location = currentWindowLocation;
    if (location.match(/dropdown/)) {
      return null;
    }

    const regex = /#.+\b/;
    const found = location.match(regex);
    if (found) {
      const idCorrectedItem = found[0].substring(1);
      const element = document.getElementById(idCorrectedItem);
      if (element) {
        const scrollValue = handleScroll(idCorrectedItem, breakPoints);
        window.scroll(0, element.offsetTop + scrollValue);
      }
    } else {
      //home
      window.scroll(0, 0);
    }
    setTriggerActive(false);
    setEnlargeDropDown(false);
    //console.log(size)
  }, [currentWindowLocation, breakPoints]);

  const handleNenuTrigger = () => {
    setTriggerActive(!triggerActive);
  };

  const handleClickDropDown = (evt) => {
    if (evt.target.innerHTML === "Drop Down") {
      setEnlargeDropDown(!enlargeDropDown);
    }
  };
  return (
    <nav
      id="main-navbar"
      className={clsx("navbar-default", { "sticky-header": showStickyHeader })}
    >
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
              <Link to="/" className="menu-items">
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/#about" className="menu-items">
                About
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/#services" className="menu-items">
                Services
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/#faq" className="menu-items">
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
                    <Link to="/#about" className="submenu-anchor-item">
                      About Us
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link to="." className="submenu-anchor-item">
                      Features
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link to="/#faq" className="submenu-anchor-item">
                      FAQ's
                    </Link>
                  </li>
                  <li
                    className={clsx(
                      "submenu-list-item",
                      enlargeDropDown && "drop-down-enlarge"
                    )}
                  >
                    <Link to="/#blog" className="submenu-anchor-item">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-list">
              <Link to="/#contact_us" className="menu-items">
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
              <Route path="#contact_us">
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
            showStickyHeader && "sticky-trigger",
            triggerActive && "line1-trigger-active"
          )}
        ></div>
        <div
          className={clsx(
            "line2",
            showStickyHeader && "sticky-trigger",
            triggerActive && "line2-trigger-active"
          )}
        ></div>
        <div
          className={clsx(
            "line3",
            showStickyHeader && "sticky-trigger",
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

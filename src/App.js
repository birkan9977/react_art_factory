import "./assets/styles/main.css";
import Header from "./components/headerarea.js";
import Navbar from "./components/navbar";
import StickyBack from "./components/sticky-back";

import { useScrollPosition } from "./components/scrollposition";
import { useState, useEffect } from "react";
import About from "./pages/about";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [animateLeftPicture, setAnimateLeftPicture] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -400;
      //console.log(currPos.y, prevPos.y);
      if (isShow !== showStickyHeader) {
        setShowStickyHeader(isShow);
      }

      const isAnimateLeft = currPos.y < -300;
      if (!animateLeftPicture) {
        setAnimateLeftPicture(isAnimateLeft);
      }
    },
    [showStickyHeader]
  );

  useEffect(() => {
    if (animateLeftPicture) {
      let element = document.getElementById("left-img");
      element.classList.add("left-image-animate");
    }
  }, [animateLeftPicture]);

  return (
    <>
      <div className="main-container">
        <StickyBack show={showStickyHeader} />

        <div className="banner-area">
          <Header />
        </div>
        <div className="app-container">
          <Navbar show={showStickyHeader} />

          <About />
        </div>
        <hr className="hr-line"></hr>
      </div>
    </>
  );
}

export default App;

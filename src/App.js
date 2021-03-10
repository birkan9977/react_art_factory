import "./assets/styles/main.css";
import BannerArea from "./components/banner-area.js";
import Navbar from "./components/navbar";
import StickyBack from "./components/sticky-back";

import { useScrollPosition } from "./components/scrollposition";
import { useState, useEffect } from "react";
import About from "./pages/about";
import About2 from "./pages/about2";
import Services from "./pages/services";
import FrequentlyQuestions from "./pages/frequently";
import ContactUs from "./pages/contact_us";
import Footer from "./pages/footer";

const App = () => {
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
    <div className="main-container">
      <StickyBack show={showStickyHeader} />
      <div className="banner-backgroung-image"></div>
      <div className="app-container">
        <div className="dummy-container"></div>
        <header>
          <Navbar show={showStickyHeader} />
          <BannerArea />
        </header>
      </div>
      <main>
        <About />
        <hr className="hr-line"></hr>
        <About2 />
        <Services />
        <FrequentlyQuestions />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

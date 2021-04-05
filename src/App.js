import BannerArea from "./components/banner-area.js";
import Navbar from "./components/navbar";
import StickyBack from "./components/sticky-back";

import { useScrollPosition } from "./components/scrollposition";
import { useState, useEffect } from "react";
import About from "./pages/about";
import About2 from "./pages/about2";
//"about 2" links to the second part of the about page below with "discover more" button

import Services from "./pages/services";
import FrequentlyQuestions from "./pages/faq";
import ContactUs from "./pages/contact_us";
import Footer from "./pages/footer";
import Preloader from "./components/preloader";

const App = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [animateLeftPicture, setAnimateLeftPicture] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (displayLoader) {
      setTimeout(() => {
        const element = document.getElementById("preloader-container");
        element.classList.remove("preload-visible");
        element.classList.add("preload-invisible");
        setDisplayLoader(false);
      }, 100);
    }
    return () => setTransition(true);
  }, [displayLoader]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      //-400 is where the fixed navbar appears on top of the page
      const isShow = currPos.y < -400;
      //console.log(currPos.y, prevPos.y);
      if (isShow !== showStickyHeader) {
        setShowStickyHeader(isShow);
      }

      const isAnimateLeft = currPos.y < -300;
      if (!animateLeftPicture) {
        setAnimateLeftPicture(isAnimateLeft);
      }

      const startTransition = currPos.y > -450;

      if (startTransition) {
        setTransition(startTransition);
        console.log(currPos.y, "test", startTransition);
      } else {
        setTransition(startTransition);
        console.log(currPos.y, "test", startTransition);
      }
    },
    [showStickyHeader]
  );

  useEffect(() => {
    if (animateLeftPicture) {
      let element = document.getElementById("left-img");
      element.classList.add("left-image-animate");
    }
    if (transition) {
      console.log("add transition");
      document
        .getElementById("banner-left-col")
        .classList.add("left-transition");
      document
        .getElementById("banner-right-col")
        .classList.add("right-transition");
    } else {
      console.log("remove transition");
      document
        .getElementById("banner-left-col")
        .classList.remove("left-transition");
      document
        .getElementById("banner-right-col")
        .classList.remove("right-transition");
    }
  }, [animateLeftPicture, transition]);
  return (
    <div className="main-container">
    
      <div id="preloader-container" className="preload-visible">
        <Preloader />
      </div>
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

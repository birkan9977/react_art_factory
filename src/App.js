import BannerArea from "./components/banner-area.js";
import Navbar from "./components/navbar";
import StickyBack from "./components/sticky-back";
import { useScrollPosition } from "./components/scrollposition";
import { useState, useEffect } from "react";
import About from "./pages/about";
import About2 from "./pages/about2"; //"about 2" links to the second part of the about page below with "discover more" button
import Services from "./pages/services";
import FrequentlyQuestions from "./pages/faq";
import ContactUs from "./pages/contact_us";
import Footer from "./pages/footer";
import Preloader from "./components/preloader";

const App = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(true);
  const [transitions, setTransitions] = useState({
    animateAboutLeft: false,
    animateAbout2Right: false,
    bannerTransition: false,
  });
  const [scrollReady, setScrollReady] = useState(false);

  //scrollY anchor positions
  const BANNER_END = 500;
  const ABOUT_START = 200;
  const ABOUT2_START = 800;
  const FIXED_NAVBAR_START = 400;
  const USE_WINDOW = true;
  const WAIT = 200;
  let element = undefined;

  //display loader
  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("preloader-container");
      element.classList.remove("preload-visible");
      element.classList.add("preload-invisible");
      setDisplayLoader(false);
    }, 1000);
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > FIXED_NAVBAR_START;
      //console.log("currPos.y", currPos.y, prevPos.y);
      if (isShow !== showStickyHeader) {
        setShowStickyHeader(isShow);
      }

      const isAnimateAboutSection = currPos.y > ABOUT_START;
      const startBannerTransition = currPos.y < BANNER_END;
      const startAbout2RightTransition = currPos.y > ABOUT2_START;
      if (scrollReady) {
        setTransitions({
          ...transitions,
          animateAboutLeft: isAnimateAboutSection,
          animateAbout2Right: startAbout2RightTransition,
          bannerTransition: startBannerTransition,
        });
      }
    },
    [showStickyHeader],
    element,
    USE_WINDOW,
    WAIT
  );

  useEffect(() => {
    //console.log(transitions);
  }, [transitions]);

  //works only once after loader is displayed
  useEffect(() => {
    if (!displayLoader) {
      setTransitions({
        ...transitions,
        animateAboutLeft: window.scrollY > ABOUT_START,
        animateAbout2Right: window.scrollY > ABOUT2_START,
        bannerTransition: window.scrollY < BANNER_END,
      });
      setScrollReady(true);
    }
  }, [displayLoader]);

  const {
    animateAboutLeft,
    animateAbout2Right,
    bannerTransition,
  } = transitions;

  return (
    <div className="main-container">
      <div id="preloader-container" className="preload-visible">
        <Preloader />
      </div>

      <StickyBack show={showStickyHeader} />
      <header>
        <div className="banner">
          <div className="container">
            <Navbar show={showStickyHeader} />
            <BannerArea bannerTransition={bannerTransition} />
          </div>
        </div>
      </header>
      <main>
        <About animateAboutLeft={animateAboutLeft} />
        <hr className="hr-line"></hr>
        <About2 animateAbout2Right={animateAbout2Right} />
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

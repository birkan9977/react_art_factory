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
import breakPointsData from "./data/breakpoints";
import clsx from "clsx";
import transitionFixedData from "./data/transition-data";
const App = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(true);
  const [transitions, setTransitions] = useState({
    animateAboutLeft: false,
    animateAbout2Right: false,
    bannerTransition: false,
  });
  const [transitionData, setTransitionData] = useState({});
  const [scrollReady, setScrollReady] = useState(false);
  const [breakPoints, setBreakPoints] = useState({});

  const USE_WINDOW = true;
  const WAIT = 100;

  //display loader
  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 1000);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleSize = () => {
    const newSize = breakPointsData(window.innerWidth);
    setBreakPoints(newSize);

    const newTransitionData = transitionFixedData(newSize);
    setTransitionData(newTransitionData);
  };

  useEffect(() => {
  }, [breakPoints]);

  const {
    fixedNavBarStart,
    bannerEnd,
    aboutStart,
    about2Start,
  } = transitionData;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > fixedNavBarStart;
      if (isShow !== showStickyHeader) {
        setShowStickyHeader(isShow);
      }

      const isAnimateAboutSection = currPos.y > aboutStart;
      const startBannerTransition = currPos.y < bannerEnd;
      const startAbout2RightTransition = currPos.y > about2Start;
      if (scrollReady) {
        setTransitions({
          ...transitions,
          animateAboutLeft: isAnimateAboutSection,
          animateAbout2Right: startAbout2RightTransition,
          bannerTransition: startBannerTransition,
        });
      }
    },
    [showStickyHeader, transitions],
    null,
    USE_WINDOW,
    WAIT
  );

  //works only once after loader is displayed
  useEffect(() => {
    if (!displayLoader) {
      setTransitions({
        ...transitions,
        animateAboutLeft: window.scrollY > aboutStart,
        animateAbout2Right: window.scrollY > about2Start,
        bannerTransition: window.scrollY < bannerEnd,
      });
      setScrollReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayLoader]);

  const {
    animateAboutLeft,
    animateAbout2Right,
    bannerTransition,
  } = transitions;

  return (
    <div className="main-container">
      <div
        id="preloader-container"
        className={clsx("preloader", { "preload-invisible": !displayLoader })}
      >
        <Preloader />
      </div>

      <StickyBack show={showStickyHeader} />
      <header>
        <div className="banner">
          <div className="container">
            <Navbar
              showStickyHeader={showStickyHeader}
              breakPoints={breakPoints}
            />
            <BannerArea
              bannerTransition={bannerTransition}
              breakPoints={breakPoints}
            />
          </div>
        </div>
      </header>
      <main>
        <About animateAboutLeft={animateAboutLeft} breakPoints={breakPoints} />
        <hr className="hr-line"></hr>
        <About2 animateAbout2Right={animateAbout2Right} />
        <Services breakPoints={breakPoints} />
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

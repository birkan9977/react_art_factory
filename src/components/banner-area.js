import sliderimg from "../assets/images/slider-icon.png";
import Button from "./button";
import clsx from "clsx";
import handleScroll from "../data/scroll-data";

export default function BannerArea({ bannerTransition, breakPoints }) {
  const handleClick = () => {
    const element = document.getElementById("about");
    const scrollValue = handleScroll("about2", breakPoints);
    window.scroll(0, element.offsetTop + scrollValue);
  };
//left-image-animate
//left-transition
  return (
    <div id="banner-bottom-area" className="banner-bottom-area">
      <div
        id="banner-left-col"
        className={clsx("left-column", { "left-animate": bannerTransition })}
      >
        <h1>
          Art Factory is free <strong>for YOU</strong>
        </h1>
        <p>
          This template is available for 100% free of charge on TemplateMo.
          Download, modify and use this for your business website.
        </p>
        <Button
          buttonContent="Find Out More"
          class="button-red"
          handleClick={handleClick}
        />
      </div>

      <div
        id="banner-right-col"
        className={clsx("right-column", {
          "right-animate": bannerTransition,
        })}
      >
        <img
          className="banner-image"
          src={sliderimg}
          alt="vector-graphic01"
        ></img>
      </div>
    </div>
  );
}

import sliderimg from "../assets/images/slider-icon.png";
import Button from "./button";
import { useScrollPosition } from "./scrollposition";
import { useState } from "react";

export default function Header() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -400;
      console.log(currPos.y, prevPos.y);
      if (isShow !== showStickyHeader) {
        setShowStickyHeader(isShow);
      }
    },
    [showStickyHeader]
  );

  return (
    <>
      <div className="banner-header-area">{/*navbar*/}</div>

      <div className="banner-bottom-area">
        <div className="left-column">
          <h1>
            Art Factory is free <strong>for YOU</strong>
          </h1>
          <p id="para">
            {" "}
            This template is available for 100% free of charge on TemplateMo.
            Download, modify and use this for your business website.
          </p>
          <Button buttonContent="Find Out More" />
        </div>

        <div className="right-column">
          <img id="img-slider" src={sliderimg} alt="vector-graphic01"></img>
        </div>
      </div>
    </>
  );
}

import sliderimg from "../assets/images/slider-icon.png";
import Button from "./button";
export default function BannerArea() {
  const handleClick = () => {
    const element = document.getElementById("about");
    window.scroll(0, element.offsetTop - 200);
  };

  return (
    <div className="banner-bottom-area">
      <div id="banner-left-col" className="left-column">
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

      <div id="banner-right-col" className="right-column">
        <img
          className="banner-image"
          src={sliderimg}
          alt="vector-graphic01"
        ></img>
      </div>
    </div>
  );
}

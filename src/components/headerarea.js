import sliderimg from "../assets/images/slider-icon.png";
import Navbar from "./header";
import Button from "./button";
export default function Header() {
  return (
    <div className="banner-area">
      <div className="banner-header-area container">
        <Navbar />
      </div>

      <div className="banner-bottom-area container">
        <div className="left-column">
          <h1>
            Art Factory is free <strong>for YOU</strong>
          </h1>
          <p>
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
    </div>
  );
}

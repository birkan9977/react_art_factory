import leftImage from "../assets/images/left-image.png";
import Button from "../components/button";
import clsx from "clsx";
export default function About({ animateAboutLeft }) {
  const handleClick = () => {
    const element = document.getElementById("about2");
    window.scroll(0, element.offsetTop - 200);
  };

  return (
    <div className="container">
      <div id="section-container">
        <section id="about">
          <div className="left-col">
            <img
              id="left-img"
              className={clsx({ "left-image-animate": animateAboutLeft })}
              src={leftImage}
              alt="vector-graphic02"
            ></img>
          </div>
          <div className="right-col">
            <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
            <p>
              This template is <a href="#"> last updated on 20 August 2019</a>{" "}
              for main menu drop-down arrow and sub menu text color. Duis auctor
              dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet
              tristique condimentum.
            </p>

            <p>
              Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien
              sit amet, ultrices malesuada odio. Donec non quam euismod, mattis
              dui a, ultrices nisi.
            </p>
            <Button
              buttonContent="Discover More"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

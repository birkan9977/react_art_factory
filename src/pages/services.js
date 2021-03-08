import serviceIcon01 from "../assets/images/service-icon-01.png";
import serviceIcon02 from "../assets/images/service-icon-02.png";
import serviceIcon03 from "../assets/images/service-icon-03.png";
import Carousel from "react-elastic-carousel";
import Button from "../components/button";

export default function Services() {
  const handleClick = () => {
    const element = document.getElementById("about2");
    window.scroll(0, element.offsetTop - 200);
  };

  return (
    <div id="services">
      <div className="carousel-container">
        <Carousel
          itemsToShow={3}
          itemPadding={[0, 15]}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="dot-carousel-flex">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <DotCarousel
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </div>
            );
          }}
        >
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon01} alt=""></img>
            </div>
            <h5>First Box Service</h5>
            <p>
              Aenean vulputate massa sed neque consectetur, ac fringilla quam
              aliquet. Sed a enim nec eros tempor cursus at id libero.
            </p>
            <Button
              buttonContent="Read More"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon02} alt=""></img>
            </div>
            <h5>Second Box Service</h5>
            <p>
              Pellentesque vitae urna ut nisi viverra tristique quis at dolor.
              In non sodales dolor, id egestas quam. Aliquam erat volutpat.
            </p>
            <Button
              buttonContent="Discover More"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon03} alt=""></img>
            </div>
            <h5>Third Box Service</h5>
            <p>
              Quisque finibus libero augue, in ultrices quam dictum id. Aliquam
              quis tellus sit amet urna tincidunt bibendum.
            </p>
            <Button
              buttonContent="More Detail"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon01} alt=""></img>
            </div>
            <h5>Fourth Box Service</h5>
            <p>
              Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit
              nec. Duis auctor dolor eu scelerisque vestibulum.
            </p>
            <Button
              buttonContent="Read More"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon01} alt=""></img>
            </div>
            <h5>Fifth Box Service</h5>
            <p>
              Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit
              nec. Duis auctor dolor eu scelerisque vestibulum.
            </p>
            <Button
              buttonContent="Discover"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon02} alt=""></img>
            </div>
            <h5>Sixth Box Service</h5>
            <p>
              Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae
              lacus. Aliquam porttitor urna ut pellentesque.
            </p>
            <Button
              buttonContent="Detail"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
          <div className="service-box">
            <div className="icon">
              <img src={serviceIcon03} alt=""></img>
            </div>
            <h5>Seventh Box Service</h5>
            <p>
              Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien
              sit amet, ultrices malesuada odio. Donec non quam.
            </p>
            <Button
              buttonContent="Read More"
              class="button-green"
              handleClick={handleClick}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

function DotCarousel(props) {
  const classBackFrame = props.active
    ? "inside-dot carousel-dot-active"
    : "inside-dot carousel-dot-passive";

  return (
    <div className="dot-carousel-button" onClick={props.onClick}>
      <div className={classBackFrame}></div>
    </div>
  );
}

import Carousel from "react-elastic-carousel";
import Button from "../components/button";
import clsx from "clsx";
import ServicesData from "../data/services-data";

export default function Services({ breakPoints }) {
  const {
    xl: extraLargeScreen,
    lg: largeScreen,
    md: mediumScreen,
    sm: smallScreen,
  } = breakPoints;
  const handleClick = () => {
    const element = document.getElementById("about2");
    window.scroll(0, element.offsetTop - 200);
  };

  const carouselProps = (function handleCarouselProps() {
    let padding = [0, 15];
    let itemsToShow = 3;

    switch (true) {
      case smallScreen:
        padding = [0, 10];
        itemsToShow = 1;
        break;
      case mediumScreen:
        padding = [0, 10];
        itemsToShow = 2;
        break;
      case largeScreen:
        padding = [0, 5];
        itemsToShow = 3;
        break;
      case extraLargeScreen:
        padding = [0, 20];
        itemsToShow = 3;
        break;
      default:
        padding = [0, 10];
        itemsToShow = 4;
    }

    return { padding, itemsToShow };
  })();

  return (
    <div id="services">
      <div className="carousel-container">
        <Carousel
          itemsToShow={carouselProps.itemsToShow}
          itemPadding={carouselProps.padding}
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
          {ServicesData.map((serviceItem, divindex) => {
            const divkey = `divindex-${divindex}`;

            return (
              <div className="service-box" key={divkey}>
                <div className="icon">
                  <img src={serviceItem.icon} alt=""></img>
                </div>
                <h5>{serviceItem.header}</h5>
                {serviceItem.body.map((paragraph, paraindex) => {
                  const paragraphkey = `paragraphindex-${paraindex}`;
                  return <p key={paragraphkey}>{paragraph}</p>;
                })}

                <Button
                  buttonContent={serviceItem.buttonContent}
                  class="button-green"
                  handleClick={handleClick}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

function DotCarousel(props) {
  const classBackFrame = clsx({
    "inside-dot": true,
    "carousel-dot-active": props.active,
    "carousel-dot-passive": !props.active,
  });

  return (
    <div className="dot-carousel-button" onClick={props.onClick}>
      <div className={classBackFrame}></div>
    </div>
  );
}

//

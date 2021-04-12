import Carousel from "react-elastic-carousel";
import Button from "../components/button";
import clsx from "clsx";
import ServicesData from "../data/services-data";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export default function Services() {
  const handleClick = () => {
    const element = document.getElementById("about2");
    window.scroll(0, element.offsetTop - 200);
  };
  const breakpointXl = useMediaQuery({ query: "(max-width: 1200px)" });
  const breakpointLg = useMediaQuery({ query: "(max-width: 992px)" });
  const breakpointMd = useMediaQuery({ query: "(max-width: 768px)" });
  const breakpointSm = useMediaQuery({ query: "(max-width: 576px)" });

  const carouselProps = (function handleCarouselProps() {
    let padding = [0, 15];
    let itemsToShow = 3;
    switch (true) {
      case breakpointSm:
        padding = [0, 10];
        itemsToShow = 1;
        break;
      case breakpointMd:
        padding = [0, 10];
        itemsToShow = 2;
        break;
      case breakpointLg:
        padding = [0, 5];
        itemsToShow = 3;
        break;
      case breakpointXl:
        padding = [0, 20];
        itemsToShow = 3;
        break;
      default:
        padding = [0, 10];
        itemsToShow = 4;
    }
    return { padding, itemsToShow };
  })();

  useEffect(() => {
    /*
      console.log('breakpointXl',breakpointXl)
      console.log('breakpointLg',breakpointLg)
      console.log('breakpointMd',breakpointMd)
      console.log('breakpointSm',breakpointSm)
      console.log('carouselProps',carouselProps)
      */
  });

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

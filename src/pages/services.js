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
  const breakpointLg = useMediaQuery({ query: "(max-width: 992px)" });
  const breakpointMd = useMediaQuery({ query: "(max-width: 768px)" });

  const handlePadding = () => {};

  useEffect(() => {});
  return (
    <div id="services">
      <div className="carousel-container">
        <Carousel
          itemsToShow={breakpointLg ? 2 : 3}
          itemPadding={breakpointLg ? [0, 40] : [0, 15]}
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

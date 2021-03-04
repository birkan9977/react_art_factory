import aboutIcon01 from "../assets/images/about-icon-01.png";
import aboutIcon02 from "../assets/images/about-icon-02.png";
import aboutIcon03 from "../assets/images/about-icon-03.png";
import rightImage from "../assets/images/right-image.png";

export default function About2() {
  return (
    <div className="app-container">
      <div className="section-container">
        <section id="about2">
          <div id="about2-left">
            <h5>Curabitur aliquam eget tellus id porta</h5>
            <p>
              Proin justo sapien, posuere suscipit tortor in, fermentum mattis
              elit. Aenean in feugiat purus.
            </p>
            <ul>
              <li>
                <img src={aboutIcon01} alt=""></img>
                <div className="list-text">
                  <h6>Nulla ultricies risus quis risus</h6>
                  <p>
                    You can use this website template for commercial or
                    non-commercial purposes.
                  </p>
                </div>
              </li>
              <li>
                <img src={aboutIcon02} alt=""></img>
                <div className="list-text">
                  <h6>Donec consequat commodo purus</h6>
                  <p>
                    You have no right to re-distribute this template as a
                    downloadable ZIP file on any website.
                  </p>
                </div>
              </li>
              <li>
                <img src={aboutIcon03} alt=""></img>
                <div className="list-text">
                  <h6>Sed placerat sollicitudin mauris</h6>
                  <p>
                    If you have any question or comment, please{" "}
                    <a rel="nofollow" href="https://templatemo.com/contact">
                      contact
                    </a>{" "}
                    us on TemplateMo.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div id="about2-right">
            <img id="about2-right-image" src={rightImage} alt=""></img>
          </div>
        </section>
      </div>
    </div>
  );
}

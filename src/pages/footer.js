
const Footer = () => {
  return (
    <div className="app-container footer-section">
      <div className="footer-left-text">
        <p class="copyright">
          Copyright &copy; 2020 Art Factory Company. Design:{" "}
          <a rel="nofollow" href="https://templatemo.com">
            TemplateMo
          </a>
        </p>
      </div>
      <div className="social-media-icons">
        <ul>
          <li>
            <a href="#" className="button button-green">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="button button-green">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="button button-green">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className="button button-green">
              <i className="fa fa-rss"></i>
            </a>
          </li>
          <li>
            <a href="#" className="button button-green">
              <i className="fa fa-dribbble"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

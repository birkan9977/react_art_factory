import Button from "../components/button";
import CustomizedAccordions from "../components/accordion";
const FrequentlyQuestions = () => {
  const handleClick = () => {
    const element = document.getElementById("about2");
    window.scroll(0, element.offsetTop - 200);
  };
  return (
    <div className="app-container">
      <section id="frequently questions" className="frequently-questions">
        <div className="faq-section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-section-paragraph">
          <p>
            Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien.
            Nunc euismod risus ac lobortis congue. Sed erat quam.
          </p>
        </div>
        <div className="faq-double-col-container">
          <div className="faq-left-col">
            <div className="faq-left-col-header">
              <h5>
                Class aptent taciti sociosqu ad litora torquent per conubia
              </h5>
            </div>
            <div className="faq-left-col-text">
              <p>
                Curabitur placerat diam in risus lobortis, laoreet porttitor est
                elementum. Nulla ultricies risus quis risus scelerisque, a
                aliquam tellus maximus. Cras pretium nulla ac convallis iaculis.
                Aenean bibendum erat vitae odio sodales, in facilisis tellus
                volutpat.
              </p>
              <p>
                Sed lobortis pellentesque magna ac congue. Suspendisse quis
                molestie magna, id eleifend ex. Ut mollis ultricies diam nec
                dictum. Morbi commodo hendrerit mi vel vulputate. Proin non
                tincidunt dui. Lorem ipsum dolor sit amet.
              </p>
              <div className="faq-left-col-text-email">
                <p>
                  Email: <a href="#">email@company.com</a>
                </p>
              </div>
              <Button
                buttonContent="Discover More"
                class="button-green"
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="faq-right-col">
            <CustomizedAccordions />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrequentlyQuestions;

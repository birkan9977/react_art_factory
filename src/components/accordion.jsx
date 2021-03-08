import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion = withStyles({
  root: {
    outline: "2px solid white",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#f7f7f7",
    //outline: '2px solid white',
    marginBottom: -1,
    minHeight: 56,

    "&$expanded": {
      minHeight: 56,
      outline: "none",
      border: "none",
    },
  },

  content: {
    "&$expanded": {
      margin: "14px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: "#f7f7f7",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  const handleHeaderClassChange = () => {
    const arrowElementName = `acc-${expanded}-arrow`;
    console.log(arrowElementName);
    const arrowElement = document.getElementById(arrowElementName);
    arrowElement.classList.toggle("accordion-arrow-expanded");

    const headerElementName = `acc-${expanded}-header`;
    console.log(headerElementName);
    const headerElement = document.getElementById(headerElementName);
    headerElement.classList.toggle("accordion-header-expanded");
  };

  useEffect(() => {
    console.log(expanded);
    const arrowElementName = `acc-${expanded}-arrow`;
    console.log(arrowElementName);
    const arrowElement = document.getElementById(arrowElementName);
    arrowElement.classList.toggle("accordion-arrow-expanded");

    const headerElementName = `acc-${expanded}-header`;
    console.log(headerElementName);
    const headerElement = document.getElementById(headerElementName);
    headerElement.classList.toggle("accordion-header-expanded");

    return () => {
      arrowElement.classList.toggle("accordion-arrow-expanded");
      headerElement.classList.toggle("accordion-header-expanded");
    };
  });

  return (
    <div className="accordion">
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div id="acc-panel1-header" className="accordion-head">
            First Common Question
            <span id="acc-panel1-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Duis vulputate porttitor urna sit amet pretium. Phasellus sed
              pulvinar eros, condimentum consequat ex. Suspendisse potenti.
            </p>
            <p>
              Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere
              mauris ut eros rutrum sodales. Aliquam erat volutpat.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div id="acc-panel2-header" className="accordion-head">
            Second Question Answer
            <span id="acc-panel2-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac
              eros iaculis, tempor quam sit amet, scelerisque mi. Quisque eu
              risus eget nunc porttitor vestibulum at a ante.
            </p>
            <p>
              Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum
              eleifend tortor, eu luctus orci sagittis in. In blandit fringilla
              mollis.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div id="acc-panel3-header" className="accordion-head">
            Third Answer for you
            <span id="acc-panel3-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis.
              Nullam maximus pharetra lorem, eu condimentum est iaculis ut.
              Pellentesque mattis ultrices dignissim.
            </p>
            <p>
              Etiam et enim finibus, feugiat massa efficitur, finibus sapien.
              Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus.
              Aenean non lectus id odio rhoncus pharetra.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div id="acc-panel4-header" className="accordion-head">
            Fourth Question Asked
            <span id="acc-panel4-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed
              sed aliquet sapien. Proin placerat, ipsum eu posuere blandit,
              tellus quam consectetur nisi, id sollicitudin diam ex at nisi.
            </p>
            <p>
              Aenean fermentum eget turpis egestas semper. Sed finibus mollis
              venenatis. Praesent at sem in massa iaculis pharetra.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div id="acc-panel5-header" className="accordion-head">
            Fifth Ever Question
            <span id="acc-panel5-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit
              rhoncus. Sed sapien elit, mollis ut ultricies quis, fermentum nec
              ante.
            </p>
            <p>
              Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut
              sagittis rutrum lectus, non sagittis ante euismod eu.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div id="acc-panel6-header" className="accordion-head">
            Sixth Sense Question
            <span id="acc-panel6-arrow" className="accordion-arrow"></span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>
              Suspendisse potenti. Ut dapibus leo ut massa vulputate semper.
              Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere
              mauris ut eros rutrum sodales. Aliquam erat volutpat.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

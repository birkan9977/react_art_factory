import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionData from "../data/accordion-data";

const Accordion = withStyles({
  root: {
    outline: "2px solid white",
    boxShadow: "none",
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
    marginBottom: -1,
    minHeight: 56,
    height: 61,

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

  useEffect(() => {
    //console.log(expanded);
    const arrowElementName = `acc-${expanded}-arrow`;
    //console.log(arrowElementName);
    const arrowElement = document.getElementById(arrowElementName);
    arrowElement.classList.toggle("accordion-arrow-expanded");

    const headerElementName = `acc-${expanded}-header`;
    //console.log(headerElementName);
    const headerElement = document.getElementById(headerElementName);
    headerElement.classList.toggle("accordion-header-expanded");

    return () => {
      arrowElement.classList.toggle("accordion-arrow-expanded");
      headerElement.classList.toggle("accordion-header-expanded");
    };
  });

  return (
    <div className="accordion">
      {AccordionData.map((currentItem, accordionIndex) => {
        const panelIndex = accordionIndex + 1;
        const panelName = `panel${panelIndex}`;
        const ariaControls = `panel${panelIndex}d-content`;
        const accordionId = `panel${panelIndex}d-header`;
        const summaryDivId = `acc-panel${panelIndex}-header`;
        const summarySpanId = `acc-panel${panelIndex}-arrow`;

        //console.log(panelIndex,panelName,ariaControls,accordionId,summaryDivId,summarySpanId)

        return (
          <Accordion
            square
            expanded={expanded === panelName}
            onChange={handleChange(panelName)}
            key={accordionIndex}
          >
            <AccordionSummary aria-controls={ariaControls} id={accordionId}>
              <div id={summaryDivId} className="accordion-head">
                {currentItem.header}
                <span id={summarySpanId} className="accordion-arrow"></span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-details">
                {currentItem.body.map((currentParagraph, paragraphIndex) => {
                  return <p key={paragraphIndex}>{currentParagraph}</p>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

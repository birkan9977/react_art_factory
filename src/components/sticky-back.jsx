import { useEffect } from "react";

export default function StickyBack(props) {
  useEffect(() => {
    let element = document.getElementById("sticky-back");
    if (props.show) {
      element.classList.add("sticky-header-background-visible");
    } else {
      element.classList.remove("sticky-header-background-visible");
    }
  });

  return <div id="sticky-back" className="sticky-header-background"></div>;
}

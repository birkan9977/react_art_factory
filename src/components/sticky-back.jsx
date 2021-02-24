import { useEffect } from "react";

export default function StickyBack(props) {
  useEffect(() => {
    let element = document.getElementById("sticky-back");
    if (!props.show) {
      element.className = "sticky-header-background";
    } else {
      element.className = "sticky-header-background-visible";
    }
  }, [props.show]);

  return <div id="sticky-back" className="sticky-header-background"></div>;
}

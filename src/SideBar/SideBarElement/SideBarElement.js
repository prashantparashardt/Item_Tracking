import React from "react";
import "./SideBarElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarElement(props) {
  return (
    <div
      className={
        props.active === "true" ? "SideBarElement active" : "SideBarElement"
      }
    >
      <FontAwesomeIcon
        className={props.active === "true" ? "fa-icon activeIcon" : "fa-icon"}
        {...props}
      />
      <div className="SideBarElementTitle">{props.title}</div>
    </div>
  );
}

export default SideBarElement;

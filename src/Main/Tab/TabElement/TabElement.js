import React from "react";
import "./TabElement.css";

function TabElement({ label, items, status }) {
  return (
    <div className={status === "active" ? "TabElement active" : "TabElement"}>
      {label}
      <span style={{ fontSize: "12px", paddingLeft: "4px" }}>({items})</span>
    </div>
  );
}

export default TabElement;

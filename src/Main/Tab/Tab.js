import React from "react";
import "./Tab.css";
import TableData from "./TabData.json";
import TabElement from "./TabElement/TabElement";

function Tab() {
  const { tab1, tab2 } = TableData;
  return (
    <div className="TabMainContainer">
      <div className="TabContainer">
        {tab1.map((tabElement) => {
          return (
            <TabElement
              label={tabElement.label}
              items={tabElement.item}
              status={tabElement.status}
            />
          );
        })}
      </div>
      <div className="TabContainer">
        {tab2.map((tabElement) => {
          return (
            <TabElement
              label={tabElement.label}
              items={tabElement.item}
              status={tabElement.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tab;

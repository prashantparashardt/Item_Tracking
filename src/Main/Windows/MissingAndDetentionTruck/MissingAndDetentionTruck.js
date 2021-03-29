import React from "react";
import "./MissingAndDetentionTruck.css";
import Data from "./MissingAndDetentionTruck.json";
import Template from "./Template/Template";
function MissingAndDetentionTruck() {
  const { missingWindow, detentionTruck } = Data;
  return (
    <div className="MissingAndDetentionTruck">
      <Template {...missingWindow} />
      <Template {...detentionTruck} />
    </div>
  );
}

export default MissingAndDetentionTruck;

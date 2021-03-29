import React from "react";
import "./HighValueShipment.css";
import Data from "./HighValueShipment.json";
import Template from "./Template/Template";
import DoYouKnow from "./DoYouKnow/DoYouKnow";
import TransporterDetails from "./TransporterDetails/TransporterDetails";

function HighValueShipment() {
  const { highValueShipment } = Data;
  return (
    <div className="MissingAndDetentionTruck">
      <Template {...highValueShipment} />
      <div className="Template2">
        <DoYouKnow />
        <TransporterDetails />
      </div>
    </div>
  );
}

export default HighValueShipment;

import React from "react";
import "./Main.css";
import Tab from "./Tab/Tab";
import InputElements from "./InputElements/InputElements";
import Cards from "./Cards/Cards";
import MissingAndDetentionTruck from "../Main/Windows/MissingAndDetentionTruck/MissingAndDetentionTruck";
import HighValueShipment from "./Windows/HighValueShipment/HighValueShipment";

function Main() {
  return (
    <div className="Main">
      <Tab />
      <InputElements />
      <Cards />
      <MissingAndDetentionTruck />
      <HighValueShipment />
    </div>
  );
}

export default Main;

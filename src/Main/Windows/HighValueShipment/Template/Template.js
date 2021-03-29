import React from "react";
import "./Template.css";

function Template({
  label,
  value,
  tripId,
  transporter,
  from,
  to,
  driverDetails,
  lastKnownDetail,
  color,
  backgroundColor,
  item,
  placeStart1time,
  placeStart2time,
  placeStart3time,
  placeStart4time,
}) {
  return (
    <div className="Template">
      <div
        style={{ borderLeft: "3px solid " + color }}
        className="TemplateHeader"
      >
        <div
          className="TemplateHeaderHeading"
          style={{ color: color, fontWeight: "500", fontSize: "20px" }}
        >
          <div>{label}</div>
          <div
            style={{
              backgroundColor: color,
              fontSize: "14px",
              marginLeft: "4px",
              color: "white",
              padding: "3px 5px 3px 5px",
              borderRadius: "10px",
            }}
          >
            On time
          </div>
        </div>
        <div className="TemplateValue">
          Value:
          <span
            style={{
              backgroundColor: backgroundColor,
              borderRadius: "10px",
              padding: "0px 5px",
            }}
          >
            {value}
          </span>
        </div>
      </div>

      <div className="DetailsContainer">
        <div className="TripDetails">
          <div className="TripDetailsId">
            <div>
              <strong>Trip id:</strong> {tripId}
            </div>
            <div>
              <strong>Transporter:</strong> {transporter}
            </div>
          </div>
          <div className="TemplateBottom">
            <strong>Driver Details</strong>
            <br />
            {driverDetails}
          </div>
          <div className="TemplateBottom">
            <strong>Item</strong>
            <br />
            {item}
          </div>
          <div className="TemplateBottom">
            <button className="btn">View More</button>
          </div>
        </div>

        <div className="DriverDetails1">
          <div className="TripDetailsLocation">
            <strong>{from}</strong>

            {placeStart1time}
          </div>
          <div className="TemplateBottom">
            <strong>Place, State </strong>
            <br />
            {placeStart2time}
          </div>
          <div className="TemplateBottom">
            <strong>Place, State </strong>
            <br />
            {placeStart3time}
          </div>
          <div className="TemplateBottom">
            <strong>Place, State </strong>
            <br />
            {placeStart4time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;

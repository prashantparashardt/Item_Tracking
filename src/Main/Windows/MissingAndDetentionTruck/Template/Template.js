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
}) {
  return (
    <div className="Template">
      <div className="TemplateHeader">
        <div style={{ color: color, fontWeight: "500", fontSize: "20px" }}>
          {label}
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
        </div>
        <div className="DriverDetails">
          <div className="TripDetailsLocation">
            <div>
              <strong>From:</strong> {from}
            </div>
            <div>
              <strong>To: </strong>
              {to}
            </div>
          </div>
          <div className="TemplateBottom">
            <strong>Last Known Details</strong>
            <br /> {lastKnownDetail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;

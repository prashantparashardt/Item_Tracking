import React from "react";
import "./TransporterDetails.css";

function TransporterDetails({ heading, content, btnContent }) {
  return (
    <div className="TemplateSide">
      <div className="TemplateSideHeading">Transporter Details</div>
      <div className="TemplateSideContent">
        <div className="TemplateSideContentContent">
          <div>
            Total
            <br />
            10
          </div>
          <div>
            Top transporter
            <br />
            VRL Logistics
          </div>
        </div>
        <div>
          <button className="ViewAllBtn">View all</button>
        </div>
      </div>
    </div>
  );
}

export default TransporterDetails;

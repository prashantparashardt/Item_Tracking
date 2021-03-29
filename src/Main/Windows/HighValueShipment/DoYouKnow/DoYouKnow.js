import React from "react";
import "./DoYouKnow.css";

function DoYouKnow({ heading, content, btnContent }) {
  return (
    <div className="TemplateSide">
      <div className="TemplateSideHeadingDoYouKnow">Do You Know?</div>
      <div className="TemplateSideContent">
        <div className="TemplateSideContentLeft">
          There are 03 untracked shipment. start tracking for not losing on them
        </div>
        <div>
          <button className="StartTrackingBtn">Start tracking</button>
        </div>
      </div>
    </div>
  );
}

export default DoYouKnow;

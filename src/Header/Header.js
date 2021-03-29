import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  return (
    <header className="Header">
      <div className="HomeIcon">
        t<span className="HomeIconSpan">EG</span>
      </div>
      <div className="TrackingContainer">
        <div className="Tracking"> Tracking</div>
        <FontAwesomeIcon className="BellIcon" icon={faAngleDown} />
      </div>
      <div className="Search">
        <FontAwesomeIcon className="SearchIcon" icon={faSearch} />
        <input
          className="SearchInput"
          type="text"
          placeholder="Search by docket no., trip no, transporter,driver name"
        />
      </div>
      <FontAwesomeIcon className="BellIcon" icon={faBell} />
    </header>
  );
}

export default Header;

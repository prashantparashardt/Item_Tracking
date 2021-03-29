import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./Input.css";

function Input({ placeholder }) {
  return (
    <div className="SearchElement">
      <FontAwesomeIcon className="SearchIcon" icon={faSearch} />
      <input className="SearchInput" type="text" placeholder={placeholder} />
      <FontAwesomeIcon className="AngleDown" icon={faCaretDown} />
    </div>
  );
}

export default Input;

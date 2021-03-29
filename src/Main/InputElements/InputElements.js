import React from "react";
import Input from "../../Input/Input";
import "./InputElements.css";

function InputElements() {
  return (
    <div className="InputElements">
      <Input placeholder="Select transporter" />
      <Input placeholder="Select plant/depot" />
      <Input placeholder="Select Item" />
    </div>
  );
}

export default InputElements;

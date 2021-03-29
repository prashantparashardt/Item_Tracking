import React from "react";
import "./Card.css";

function Card({
  active,
  amount,
  label,
  percentageChangeInAmount,
  percentageChangeInNumber,
  number,
  color,
}) {
  return (
    <div
      style={{ backgroundColor: color, color: "white" }}
      className={active === "true" ? "FirstCard" : "Card"}
    >
      <div className="CardLabel">{label}</div>
      <div className="CardAmount">
        <div className="CardNumber">{number}</div>
        <div>{amount}</div>
      </div>
      <hr style={{ margin: 0, marginTop: "4px" }} />
      <div className="CardPercentage">
        <div>{percentageChangeInNumber}</div>
        <div>{percentageChangeInAmount}</div>
      </div>
    </div>
  );
}

export default Card;

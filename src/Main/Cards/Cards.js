import React from "react";
import Data from "./data.json";
import Card from "./Card/Card";
import "./Cards.css";

function Cards() {
  const { data } = Data;
  return (
    <div className="Cards">
      <Card {...data[0]} />
      <div className="CardRightSide">
        <hr />
        <div className="CardRightSideCards">
          {data.slice(1).map((item) => {
            return <Card {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;

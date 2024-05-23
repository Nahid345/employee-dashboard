import React from "react";
import "./Card.css";

const Card = (props) => {
  const Png = props.png;
  return (
    <div
      className="card"
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className="icon">
        <Png />
      </div>
      <div className="title">{props.title}</div>
      <div className="card-value">{props.value}</div>
      <div className="previous-value">
        Last month: <span>{props.lastmonth}</span>
      </div>
    </div>
  );
};

export default Card;

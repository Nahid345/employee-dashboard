import React from "react";
import "./Cards.css";
import { CardsData } from "../../data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              value={card.value}
              color={card.color}
              png={card.png}
              lastmonth={card.lastmonth}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

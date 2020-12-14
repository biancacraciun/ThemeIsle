import React from "react";
import "./cards.scss";

import Card from "../../components/card/card";

const Cards = (props) => {
  const data = props.data;
  const openCard = props.openCard;

  return (
    <div className="content">
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            link={card.thumbnail.small}
            title={card.title}
            text={card.content}
            author={card.author.name}
            position={card.author.role}
            date={card.date}
            openCardHandler={openCard}
          />
        );
      })}
    </div>
  );
};

export default Cards;

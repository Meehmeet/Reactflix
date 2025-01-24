import React from "react";
import Card from "./Card";

function List({ cards, onDeleteCard }) {
  return (
    <div className="flex flex-col items-start space-y-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
          onDelete={() => onDeleteCard(index)}
        />
      ))}
    </div>
  );
}

export default List;
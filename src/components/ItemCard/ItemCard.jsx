import React from "react";
import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(data)}>
      <img
        className="card__image"
        src={data.link}
        alt={data.name}
      />
      <h2 className="card__title">{data.name}</h2>
    </div>
  );
}

export default ItemCard;
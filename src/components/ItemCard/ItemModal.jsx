import React from "react";
import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDelete }) {
  if (!card) return null;
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="item-modal__container">
        <button className="item-modal__close-btn" type="button" onClick={onClose}>
          X
        </button>
        <img className="item-modal__image" src={card.imageUrl} alt={card.name} />
        <div className="item-modal__footer">
          <h2 className="item-modal__text item-modal__text_bold">{card.name}</h2>
          <p className="item-modal__text">Weather: {card.weather}</p>
        <button
          className="modal__delete-btn"
          type="button"
          onClick={() => onDelete(card)}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

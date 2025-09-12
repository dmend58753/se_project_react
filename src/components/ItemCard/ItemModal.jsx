import React from "react";
import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDelete }) {
  if (!card) return null;
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" type="button" onClick={onClose}>
          X
        </button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__text modal__text_bold">{card.name}</h2>
          <p className="modal__text">Weather: {card.weather}</p>
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

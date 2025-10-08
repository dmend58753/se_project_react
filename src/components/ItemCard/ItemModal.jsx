import React, { useContext } from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, card, onClose, onDelete, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  
  if (!card) return null;
  
  const isOwner = currentUser && (card.owner === currentUser._id || card.owner === currentUser.id);
  
  console.log("Delete button debug:", {
    isLoggedIn,
    currentUser,
    cardOwner: card.owner,
    isOwner
  });
  
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="item-modal__container">
        <button className="item-modal__close-btn" type="button" onClick={onClose}>
          X
        </button>
        <img className="item-modal__image" src={card.imageUrl || card.link} alt={card.name} />
        <div className="item-modal__footer">
          <h2 className="item-modal__text item-modal__text_bold">{card.name}</h2>
          <p className="item-modal__text">Weather: {card.weather}</p>
          {isLoggedIn && isOwner && (
            <button
              className="modal__delete-btn"
              type="button"
              onClick={() => onDelete(card)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

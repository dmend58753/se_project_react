import React from "react";
import "./Modal.css";

function ItemModal({ isOpen, card, onClose }) {
  if (!card) return null;
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}> 
      <div className="modal__container" style={{ position: "relative" }}>
        <button className="modal__close-btn" type="button" onClick={onClose} style={{ position: "absolute", top: 24, right: 24 }}>
          X
        </button>
        <img src={card.link} alt={card.name} style={{ display: "block", width: "100%", borderRadius: "16px" }} />
        <div className="modal__footer" style={{ background: "#fff", padding: "16px", borderRadius: "0 0 16px 16px" }}>
          <h2 className="modal__text" style={{ margin: 0, fontWeight: 700 }}>{card.name}</h2>
          <p className="modal__text" style={{ margin: 0 }}>{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

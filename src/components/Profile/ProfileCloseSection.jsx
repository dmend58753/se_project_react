import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ProfileCloseSection.css";

function ProfileCloseSection({ clothingItems, onCardClick, onAddGarmentClick }) {
  return (
    <section className="close-section">
      <div className="close-section__row">
        <p className="close-section__text">Your items</p>
        <button className="close-section__button" onClick={onAddGarmentClick}>+ Add new</button>
      </div>
      <ul className="close-section__card-list">
        {clothingItems.map((item) => (
          <li key={item._id} className="close-section__card-item">
            <ItemCard data={item} onCardClick={onCardClick} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProfileCloseSection;
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ProfileCloseSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProfileCloseSection({
  clothingItems,
  onCardClick,
  onAddGarmentClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="close-section">
      <div className="close-section__row">
        <p className="close-section__text">Your items</p>
        <button className="close-section__button" onClick={onAddGarmentClick}>
          + Add new
        </button>
      </div>
      <ul className="close-section__card-list">
        {clothingItems
          .filter((item) => item.owner === currentUser._id)
          .map((item) => (
            <li key={item._id} className="close-section__card-item">
              <ItemCard data={item} onCardClick={onCardClick} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ProfileCloseSection;

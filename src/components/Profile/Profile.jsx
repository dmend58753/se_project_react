import React from "react";
import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";
import ProfileCloseSection from "./ProfileCloseSection";
import ClothesSection from "./ClothesSection";

function Profile({ clothingItems, onCardClick, onAddGarmentClick }) {
  return (
    <main className="profile">
      <ProfileSidebar />
      <ProfileCloseSection 
        clothingItems={clothingItems} 
        onCardClick={onCardClick}
        onAddGarmentClick={onAddGarmentClick}
      />
      <ClothesSection clothingItems={[]} onCardClick={onCardClick} />
      
    </main>
  );
}

export default Profile;

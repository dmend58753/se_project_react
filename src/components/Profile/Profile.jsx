import React from "react";
import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";
import ProfileCloseSection from "./ProfileCloseSection";



function Profile({ clothingItems, onCardClick, onAddGarmentClick }) {
  return (
    <main className="profile">
      <ProfileSidebar />
      <ProfileCloseSection 
      clothingItems={clothingItems} 
      onCardClick={onCardClick}
      onAddGarmentClick={onAddGarmentClick}
      />
    </main>
  );
}

export default Profile;

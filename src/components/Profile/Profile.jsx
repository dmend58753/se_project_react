import React from "react";
import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";
import ProfileCloseSection from "./ProfileCloseSection";
import ClothesSection from "./ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  onAddGarmentClick,
  onSignOut,
  onEditProfile,
}) {
  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  return (
    <main className="profile">
      <ProfileSidebar
        onSignOut={onSignOut}
        onEditProfile={onEditProfile || handleEditProfile}
      />
      <ProfileCloseSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddGarmentClick={onAddGarmentClick}
      />
    </main>
  );
}

export default Profile;

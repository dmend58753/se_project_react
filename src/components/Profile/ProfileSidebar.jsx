import React, { useContext } from "react";
import "./ProfileSidebar.css";
import avatar from "../../assets/Avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProfileSidebar({ onSignOut, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        {currentUser?.avatar ? (
          <img src={currentUser.avatar} alt={currentUser.name} className="sidebar__avatar" />
        ) : (
          <img src={avatar} alt="Avatar" className="sidebar__avatar" />
        )}
        <p className="sidebar__username">{currentUser?.name || "User"}</p>
      </div>
      <div className="sidebar__actions">
        <button 
          className="sidebar__btn sidebar__btn_type_edit"
          onClick={onEditProfile}
        >
          Change profile data
        </button>
        <button 
          className="sidebar__btn sidebar__btn_type_logout"
          onClick={onSignOut}
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
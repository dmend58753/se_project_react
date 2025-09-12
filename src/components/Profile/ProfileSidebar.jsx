import React from "react";
import "./ProfileSidebar.css";
import avatar from "../../assets/Avatar.svg";

function ProfileSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <img src={avatar} alt="Avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Daniel Mendoza</p>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
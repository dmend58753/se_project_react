
import logo from "../assets/Logo (1).svg";
import avatar from "../assets/Avatar.svg";
import "./Header.css";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function Header({ onAddGarmentClick }) {
  const now = new Date();
  const dateString = now.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR Logo" className="header__logo" />
      <p className="header__place">
        <time className="header__dateTime" dateTime={now.toISOString()}>
          {dateString}
        </time>
        , Orlando, FL
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        <button
          className="header__add-clothes-btn"
          onClick={
            typeof onAddGarmentClick === "function"
              ? onAddGarmentClick
              : undefined
          }
        >
          + Add clothes
        </button>
        <p className="header__username">Daniel Mendoza</p>
        <img src={avatar} alt="Daniel Mendoza" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

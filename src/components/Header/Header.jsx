
import logo from "../../assets/Logo (1).svg";
import avatar from "../../assets/Avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ onAddGarmentClick, isLoggedIn, onRegisterClick, onLoginClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  
  const now = new Date();
  const dateString = now.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
   console.log("Header rendered. isLoggedIn:", isLoggedIn, "currentUser:", currentUser);




  return (
    <header className="header">
      <Link to="/"
      className= "header__link">
      <img src={logo}
       alt="WTWR Logo" className="header__logo" />
      </Link>

      <p className="header__place">
        <time className="header__dateTime" dateTime={now.toISOString()}>
          {dateString}
        </time>
        , Orlando, FL
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        
        {isLoggedIn ? (
          <>
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
            <Link to="/profile" className="header__link">
              <p className="header__username">{currentUser?.name || "User"}</p>
              {currentUser?.avatar ? (
                <img src={currentUser.avatar} alt={currentUser.name} className="header__avatar" />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            <button
              className="header__register-btn"
              onClick={() => {
                console.log("Sign Up button clicked!");
                console.log("onRegisterClick function:", onRegisterClick);
                if (onRegisterClick) onRegisterClick();
              }}
            >
              Sign Up
            </button>
            <button
              className="header__login-btn"
              onClick={onLoginClick}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

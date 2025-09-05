import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch() {
const { currentTemperatureUnit, handleToggleSwitch } = useContext(CurrentTemperatureUnitContext);

  return (
    <label className="toggle__switch" htmlFor="toggle__switch">
      <input
         onChange={handleToggleSwitch}
         checked={currentTemperatureUnit === "C"}
        type="checkbox"
        id="toggle__switch"
        className="toggle__switch--checkbox"
      />
      <span className="toggle__switch__circle"></span>
      <span className="toggle__switch__value toggle__switch__value__left">F</span>
      <span className="toggle__switch__value toggle__switch__value__right">C</span>
    </label>
  );
}

export default ToggleSwitch;
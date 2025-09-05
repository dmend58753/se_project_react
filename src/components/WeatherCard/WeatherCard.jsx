
import React, { useContext } from "react";
import weatherConditionImages from "../../utils/constant.js";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temp?.[currentTemperatureUnit] ?? "--";

  // Determine time of day and weather condition
  // Fallbacks: 'day' and 'clear' if not available
  const timeOfDay = weatherData?.timeOfDay || 'day'; // expects 'day' or 'night'
  let condition = weatherData?.weatherCondition || 'clear';
  // Normalize condition to match keys in constant.js
  condition = condition.toLowerCase();
  if (condition === 'clouds') condition = 'cloudy';
  if (condition === 'rain') condition = 'rainy';
  if (condition === 'snow') condition = 'snowy';

  // Get image src from mapping, fallback to default if not found, then to clear
  const imageSrc = weatherConditionImages[timeOfDay]?.[condition] || weatherConditionImages[timeOfDay]?.default || weatherConditionImages[timeOfDay]?.clear;
  const altText = `${timeOfDay} ${condition} weather`;

  return (
    <section className="weather-card">
      <img src={imageSrc} alt={altText} className="weather-card__image" />
      <p className="weather-card__temp">{temp}°{currentTemperatureUnit}</p>
    </section>
  );
}

export default WeatherCard;

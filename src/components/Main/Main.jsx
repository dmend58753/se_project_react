import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { getWeatherCondition } from "../../utils/weatherApi";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, clothingItems, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // Determine weather type for filtering (always use F for logic)
  const tempObj = weatherData?.temp;
  const tempF = tempObj?.F;
  const weatherType = tempF !== undefined ? getWeatherCondition(tempF) : null;
  const filteredItems = weatherType
    ? clothingItems.filter((item) => item.weather && item.weather.toLowerCase() === weatherType)
    : clothingItems;

  // Display temp in selected unit
  const displayTemp = tempObj?.[currentTemperatureUnit] ?? '--';

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p>Today is {displayTemp}°{currentTemperatureUnit}. You may want to wear:</p>
      <ul className="main__card-list">
        {filteredItems.map((item) => (
          <li key={item._id} className="main__card-item">
            <ItemCard data={item} onCardClick={onCardClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;

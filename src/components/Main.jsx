import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../components/ItemCard/ItemCard";
import "../components/main.css";

function Main({ clothingItems, onCardClick }) {
  return (
    <main className="main">
      <WeatherCard />
      <p>Today is 75 degrees. You may want to wear:</p>
      <ul className="main__card-list">
        {clothingItems.map((item) => (
          <li key={item._id} className="main__card-item">
            <ItemCard data={item} onCardClick={onCardClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;

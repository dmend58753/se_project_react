import React, { useState, useEffect } from "react";
import Main from "../Main.jsx";
import Header from "../Header";
import Footer from "../Footer";
import ModalWithForm from "../ModalWithForm";
import ItemModal from "../ItemCard/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";


function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitch = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [isAddGarmentModalOpen, setIsAddGarmentModalOpen] = useState(false);

  const handleOpenItemModal = (item) => {
    setSelectedItem(item);
    setActiveModal("itemModal");
  };

  const handleCloseItemModal = () => {
    setActiveModal("");
    setSelectedItem(null);
  };

  const handleOpenAddGarmentModal = () => {
    setIsAddGarmentModalOpen(true);
    setActiveModal("");
  };

  const handleCloseAddGarmentModal = () => {
    setIsAddGarmentModalOpen(false);
  };

  const handleAddGarmentSubmit = (e) => {
    e.preventDefault();
    // Add garment logic here
    setIsAddGarmentModalOpen(false);
  };

  const [weatherData, setWeatherData] = useState({ city: "", temp: 0 });

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitch }}>
      <div className="app">
      <Header
        weatherData={weatherData}
        onAddGarmentClick={handleOpenAddGarmentModal}
      />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onCardClick={handleOpenItemModal}
      />
      <ItemModal
        isOpen={activeModal === "itemModal"}
        card={selectedItem}
        onClose={handleCloseItemModal}
      />
      <ModalWithForm
        isOpen={isAddGarmentModalOpen}
        onClose={handleCloseAddGarmentModal}
        onSubmit={handleAddGarmentSubmit}
        title="Add garment"
        buttonText="Add garment"
        name="add-garment-form"
      />
      <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

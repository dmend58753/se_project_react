import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemCard/ItemModal";
import { getWeatherData, getItems, addItem, deleteItem } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import "./App.css";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";


function App() {
  const [clothingItems, setClothingItems] = useState([]);
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
  };

  const handleCloseAddGarmentModal = () => {
    setIsAddGarmentModalOpen(false);
  };

  const handleAddGarmentSubmit = (inputValues) => {
    addItem(inputValues)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        setIsAddGarmentModalOpen(false);
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
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

  useEffect(() => {
    getItems()
      .then((items) => setClothingItems(items.reverse()))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteItem = (item) => {
    deleteItem(item._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((i) => i._id !== item._id)
        );
        setActiveModal(""); // Optionally close the modal
        setSelectedItem(null);
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
      });
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitch }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          onAddGarmentClick={handleOpenAddGarmentModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                onCardClick={handleOpenItemModal}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                onCardClick={handleOpenItemModal}
                onAddGarmentClick={handleOpenAddGarmentModal}
              />
            }
          ></Route>
        </Routes>
        <ItemModal
          isOpen={activeModal === "itemModal"}
          card={selectedItem}
          onClose={handleCloseItemModal}
          onDelete={handleDeleteItem}
        />

        <AddItemModal
          isOpen={isAddGarmentModalOpen}
          onClose={handleCloseAddGarmentModal}
          onSubmit={handleAddGarmentSubmit}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

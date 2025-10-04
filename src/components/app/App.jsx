import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemCard/ItemModal";
import { getWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./App.css";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { addItem, getItems, deleteItem } from "../../utils/api";
import { signUp, signIn, checkToken } from "../../utils/auth";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitch = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [isAddGarmentModalOpen, setIsAddGarmentModalOpen] = useState(false);

  // Authentication state
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
    console.log("handleAddGarmentSubmit called with:", inputValues);
    const token = localStorage.getItem("jwt");
    console.log("Token:", token ? "exists" : "missing");
    
    addItem(inputValues, token)
      .then((newItem) => {
        console.log("Item added successfully:", newItem);
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

  // Check for token on app load
  useEffect(() => {getUserdata()}, []);

  function getUserdata() {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          localStorage.removeItem("jwt");
        });
    }
  }

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteItem(item._id, token)
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

  const handleSignUp = ({ name, avatar, email, password }) => {
    console.log("handleSignUp called with:", { name, avatar, email, password });
    signUp({ name, avatar, email, password })
      .then((res) => {
        console.log("Signup successful:", res);
        setIsRegisterModalOpen(false);
        return handleSignIn({ email, password });
      })

      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        getUserdata();
        setIsLoginModalOpen(false);
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitch }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <Header
            weatherData={weatherData}
            onAddGarmentClick={handleOpenAddGarmentModal}
            isLoggedIn={isLoggedIn}
            onRegisterClick={handleOpenRegisterModal}
            onLoginClick={handleOpenLoginModal}
            onSignOut={handleSignOut}
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

          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={handleCloseRegisterModal}
            onSubmit={handleSignUp}
          />

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleCloseLoginModal}
            onSubmit={handleSignIn}
          />

          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

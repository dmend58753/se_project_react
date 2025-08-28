import React, { useState } from "react";
import Main from "./main";
import Header from "./Header";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { defaultClothingItems } from "../utils/clothingItems";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
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

  return (
    <div className="app">
      <Header onAddGarmentClick={handleOpenAddGarmentModal} />
      <Main clothingItems={clothingItems} onCardClick={handleOpenItemModal} />
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
  );
}

export default App;

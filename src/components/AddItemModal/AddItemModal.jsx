import ModalWithForm from "../Modals/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function AddItemModal({ isOpen, onClose, onSubmit, }) {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "hot",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("AddItemModal - Form submitted with values:", values);
    
    // Check if required fields are filled
    if (!values.name || !values.imageUrl) {
      console.error("Missing required fields:", { name: values.name, imageUrl: values.imageUrl });
      return;
    }
    
    onSubmit(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      title="Add garment"
      buttonText="Add garment"
      name="add-garment-form"
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="add-garment-name">
          Name
          <input
            className="modal__input"
            type="text"
            id="add-garment-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="add-garment-imageUrl">
          Image URL
          <input
            className="modal__input"
            type="text"
            id="add-garment-imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Weather</legend>
        <div className="modal__radio-group">
          <label className="modal__label" htmlFor="weather-hot">
            <input
              className="modal__radio-input"
              type="radio"
              id="weather-hot"
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
            />
            Hot
          </label>
          <label className="modal__label" htmlFor="weather-warm">
            <input
              className="modal__radio-input"
              type="radio"
              id="weather-warm"
              name="weather"
              value="warm"
              checked={values.weather === "warm"}
              onChange={handleChange}
            />
            Warm
          </label>
          <label className="modal__label" htmlFor="weather-cold">
            <input
              className="modal__radio-input"
              type="radio"
              id="weather-cold"
              name="weather"
              value="cold"
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
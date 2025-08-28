
import "./Modal.css";


function ModalWithForm({ isOpen, onClose, onSubmit, title, buttonText, name }) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}> 
      <div className="modal__container modal__container_type_form">
        <button className="modal__close-btn modal__close-btn_type_form" type="button" onClick={onClose}>
          {/* Use an SVG icon here instead of 'X' for production */}
          X
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form modal__form_type_form" onSubmit={onSubmit} name={name}>
          <fieldset className="modal__fieldset">
            <label className="modal__label" htmlFor="add-garment-name">Name
              <input className="modal__input" type="text" id="add-garment-name" name="name" required />
            </label>
          </fieldset>
          <fieldset className="modal__fieldset">
            <label className="modal__label" htmlFor="add-garment-link">Image URL
              <input className="modal__input" type="url" id="add-garment-link" name="link" required />
            </label>
          </fieldset>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Weather</legend>
            <div className="modal__radio-group">
              <label className="modal__label" htmlFor="weather-hot">
                <input className="modal__radio-input" type="radio" id="weather-hot" name="weather" value="hot" />
                Hot
              </label>
              <label className="modal__label" htmlFor="weather-warm">
                <input className="modal__radio-input" type="radio" id="weather-warm" name="weather" value="warm" />
                Warm
              </label>
              <label className="modal__label" htmlFor="weather-cold">
                <input className="modal__radio-input" type="radio" id="weather-cold" name="weather" value="cold" />
                Cold
              </label>
            </div>
          </fieldset>
          <button className="modal__submit-btn modal__submit-btn_type_form" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

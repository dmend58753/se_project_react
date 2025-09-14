import "./Modal.css";

function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  buttonText,
  name,
  children,
}) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <button
          className="modal__close-btn modal__close-btn_type_form"
          type="button"
          onClick={onClose}
        >
          {/* Use an SVG icon here instead of 'X' for production */}X
        </button>
        <h2 className="modal__title">{title}</h2>
        <form
          className="modal__form modal__form_type_form"
          onSubmit={onSubmit}
          name={name}
        >
          {children}
          <button
            className="modal__submit-btn modal__submit-btn_type_form"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

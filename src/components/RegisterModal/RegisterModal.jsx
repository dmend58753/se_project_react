import ModalWithForm from "../Modals/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function RegisterModal({ isOpen, onClose, onSubmit, onLoginClick }) {
  const { values, handleChange } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    onSubmit(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      title="Sign up"
      name="register-form"
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="register-email">
          Email*
          <input
            className="modal__input"
            type="email"
            id="register-email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="register-password">
          Password*
          <input
            className="modal__input"
            type="password"
            id="register-password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="register-name">
          Name*
          <input
            className="modal__input"
            type="text"
            id="register-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="register-avatar">
          Avatar URL
          <input
            className="modal__input"
            type="url"
            id="register-avatar"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <div className="modal__button-row">
        <button type="submit" className="modal__submit-btn">
          Sign Up
        </button>
        <button
          type="button"
          className="modal__or-login-btn"
          onClick={() => {
            onClose();
            onLoginClick();
          }}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;

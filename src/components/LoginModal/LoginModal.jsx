import ModalWithForm from "../Modals/ModalWithForm";
import { useForm } from "../../hooks/useForm.js";

function LoginModal({ isOpen, onClose, onSubmit, onRegisterClick }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      title="Log in"
      name="login-form"
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="login-email">
          Email*
          <input
            className="modal__input"
            type="email"
            id="login-email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="login-password">
          Password*
          <input
            className="modal__input"
            type="password"
            id="login-password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
      <div className="modal__button-row">
        <button type="submit" className="modal__submit-btn">
          Log in
        </button>
        <button
          type="button"
          className="modal__alt-action-btn"
          onClick={() => {
            onClose();
            onRegisterClick();
          }}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;

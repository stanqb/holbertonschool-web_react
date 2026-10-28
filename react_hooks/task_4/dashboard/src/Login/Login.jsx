import { useState } from 'react';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isFormValid = (email, password) => email !== ''
  && password !== ''
  && EMAIL_REGEX.test(email)
  && password.length >= 8;

function Login({ logIn = () => {} }) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChangeEmail = (event) => {
    const { value: email } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, email }));
    setEnableSubmit(isFormValid(email, formData.password));
  };

  const handleChangePassword = (event) => {
    const { value: password } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, password }));
    setEnableSubmit(isFormValid(formData.email, password));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  };

  return (
    <div className="App-body border-t-4 border-[color:var(--main-color)] min-h-[45vh] px-10 pt-5 text-xl max-[520px]:px-1">
      <p>Login to access the full dashboard</p>
      <form
        className="App-form flex items-center gap-2 mt-8 text-lg max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-0"
        onSubmit={handleLoginSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangePassword}
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <input
          type="submit"
          value="OK"
          disabled={!enableSubmit}
          className="border border-black rounded px-[3px] cursor-pointer max-[520px]:mt-1 max-[520px]:px-[5px]"
        />
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

export default WithLogging(Login);

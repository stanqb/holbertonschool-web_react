import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isFormValid = (email, password) => email !== ''
  && password !== ''
  && EMAIL_REGEX.test(email)
  && password.length >= 8;

function useLogin(onLogin) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [enableSubmit, setEnableSubmit] = useState(false);

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
    if (typeof onLogin === 'function') {
      onLogin(formData.email, formData.password);
    }
  };

  return {
    email: formData.email,
    password: formData.password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
}

export default useLogin;

import React from 'react';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class Login extends React.Component {
  constructor(props) {
    super(props);
    const { email = '', password = '' } = props;
    this.state = {
      email,
      password,
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn(email, password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.validateForm);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    const enableSubmit = email !== ''
      && password !== ''
      && EMAIL_REGEX.test(email)
      && password.length >= 8;
    this.setState({ enableSubmit });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body border-t-4 border-[color:var(--main-color)] min-h-[45vh] px-10 pt-5 text-xl max-[520px]:px-1">
        <p>Login to access the full dashboard</p>
        <form
          className="App-form flex items-center gap-2 mt-8 text-lg max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-0"
          onSubmit={this.handleLoginSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
            className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
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
}

Login.propTypes = {
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  logIn: () => {},
  email: '',
  password: '',
};

export default WithLogging(Login);

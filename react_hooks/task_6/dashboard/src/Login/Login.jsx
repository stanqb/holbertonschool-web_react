import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';
import useLogin from '../hooks/useLogin';

function Login({ logIn }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin(logIn);

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
          name="user_email"
          value={email}
          onChange={handleChangeEmail}
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="user_password"
          value={password}
          onChange={handleChangePassword}
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <input
          type="submit"
          value="OK"
          disabled={enableSubmit === false}
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

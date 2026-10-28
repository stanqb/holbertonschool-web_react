import PropTypes from 'prop-types';
import holbertonLogo from '../assets/holberton-logo.jpg';

const defaultUser = { email: '', password: '', isLoggedIn: false };

function Header({ user = defaultUser, logOut }) {
  const handleLogOut = (event) => {
    event.preventDefault();
    if (logOut) logOut();
  };

  return (
    <>
      <div className="App-header flex items-center px-3 pt-2 mb-10 max-[520px]:flex-col max-[520px]:gap-2 max-[520px]:text-center">
        <img src={holbertonLogo} alt="holberton logo" className="w-60 h-60" />
        <h1 className="text-5xl font-bold text-[color:var(--main-color)] max-[520px]:text-4xl">School Dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <section id="logoutSection" className="px-3 -mt-6 mb-6">
          Welcome {user.email}{' '}
          <a href="#" className="italic cursor-pointer" onClick={handleLogOut}>(logout)</a>
        </section>
      )}
    </>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  logOut: PropTypes.func,
};

export default Header;

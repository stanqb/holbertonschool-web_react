import PropTypes from 'prop-types';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

const defaultUser = { email: '', password: '', isLoggedIn: false };

function Footer({ user = defaultUser }) {
  return (
    <div className="App-footer mt-auto mx-3 bg-white border-t-4 border-[color:var(--main-color)] py-4 text-center italic text-xl max-[912px]:py-2 max-[912px]:text-base">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
};

export default Footer;

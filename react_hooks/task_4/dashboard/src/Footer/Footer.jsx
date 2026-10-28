import { useContext } from 'react';
import newContext from '../Context/context';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const { user } = useContext(newContext);

  return (
    <div className="App-footer mt-auto mx-3 bg-white border-t-4 border-[color:var(--main-color)] py-4 text-center italic text-xl max-[912px]:py-2 max-[912px]:text-base">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
      {user && user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;

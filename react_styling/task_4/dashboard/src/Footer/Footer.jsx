import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer mt-auto mx-3 bg-white border-t-4 border-[color:var(--main-color)] py-4 text-center italic text-xl max-[912px]:py-2 max-[912px]:text-base">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
    </div>
  );
}

export default Footer;

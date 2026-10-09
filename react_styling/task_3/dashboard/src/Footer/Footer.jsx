import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer fixed bottom-0 left-3 right-3 bg-white border-t-4 border-[color:var(--main-color)] py-4 text-center italic text-xl">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;

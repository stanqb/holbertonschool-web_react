import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header flex items-center px-3 pt-2 mb-10">
      <img src={holbertonLogo} alt="holberton logo" className="w-60 h-60" />
      <h1 className="text-5xl font-bold text-[color:var(--main-color)]">School Dashboard</h1>
    </div>
  );
}

export default Header;

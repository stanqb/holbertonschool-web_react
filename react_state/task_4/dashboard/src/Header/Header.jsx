import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import newContext from '../Context/context';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event) {
    event.preventDefault();
    const { logOut } = this.context;
    logOut();
  }

  render() {
    const { user } = this.context;

    return (
      <>
        <div className="App-header flex items-center px-3 pt-2 mb-10 max-[520px]:flex-col max-[520px]:gap-2 max-[520px]:text-center">
          <img src={holbertonLogo} alt="holberton logo" className="w-60 h-60" />
          <h1 className="text-5xl font-bold text-[color:var(--main-color)] max-[520px]:text-4xl">School Dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <section id="logoutSection" className="px-3 -mt-6 mb-6">
            Welcome <b>{user.email}</b> (
            <a href="#" className="italic cursor-pointer" onClick={this.handleLogOut}>logout</a>
            )
          </section>
        )}
      </>
    );
  }
}

Header.contextType = newContext;

export default Header;

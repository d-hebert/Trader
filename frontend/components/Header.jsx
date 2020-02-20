import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout();
  }

  loggedInNav(user) {
    return (
      <header id="header-nav">
        <div id="blockOptions">
          <h2>{user.email}</h2>
          <button onClick={this.handleLogout} id="logout-button">Log out</button>
        </div>
        <div id="userOptions">
          <NavLink exact to="/portfolio">Portfolio</NavLink>
          <NavLink exact to="/transactions">Transactions</NavLink>
        </div>
      </header>
    )
  }

  NavLinks() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return this.loggedInNav(currentUser);
    } else {
      return (
        <header>
          <div className="top-right-nav">
            <NavLink exact to="/login">Log in</NavLink>
            <NavLink exact to="/signup">Sign up</NavLink>
          </div>
        </header>
      )
    }
  }

  render () {
    if (this.state.redirect) { return <Redirect to='/' /> }
    return (
      this.NavLinks()
    )
  }
}

export default Header;
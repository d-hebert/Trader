import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout();
    <Redirect exact to='/' />
  }

  NavLinks() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <header>
          <div className="top-left-nav">
            <h2>{currentUser.email}</h2>
            <button onClick={this.handleLogout}>Log out</button>
          </div>
          <div className="top-right-nav">
            <NavLink exact to="/portfolio">Portfolio</NavLink>
            <NavLink exact to="/transactions">Transactions</NavLink>
          </div>
        </header>
      )
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
    return (
      this.NavLinks()
    )
  }
}

export default Header;
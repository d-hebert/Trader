import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor (props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    const currentUser = this.props.currentUser;
    debugger
    if (currentUser) {
      return (
      <div>
        <h2>{currentUser.email}!</h2>
        <h2>
          <button onClick={this.handleLogout}>Log out</button>
        </h2>
      </div>)
    } else {
      return (
        <div>
          <h2>You are not logged in!</h2>
          <h2>
            <Link to="/login">Log in here</Link>
          </h2>
          <h2>
            <Link to="/signup">Or Sign Up!</Link>
          </h2>
        </div>
      );
    }
  }
}

export default MainNav;
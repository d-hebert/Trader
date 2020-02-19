import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';

import Header from './Header';

const msp = (state) => {
  return {
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => { dispatch(logout()) }
  }
}

export default connect(msp, mdp)(Header);
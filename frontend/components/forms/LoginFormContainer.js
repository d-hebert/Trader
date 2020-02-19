import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from "./SessionForm";

const msp = state => {
  return {
    errors: state.errors.session,
    type: "login"
  };
};

const mdp = (dispatch) => {
  return {
    processForm: data => (dispatch(login(data)))
  }
}

export default connect(msp, mdp)(SessionForm);
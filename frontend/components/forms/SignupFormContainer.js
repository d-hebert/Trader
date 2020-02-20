import { connect } from "react-redux";

import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from './SessionForm';

const msp = state => {
  return {
    errors: state.errors.session,
    type: 'signup',
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mdp = dispatch => {
  return {
    processForm: data => dispatch(signup(data)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);

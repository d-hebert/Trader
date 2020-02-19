import { connect } from "react-redux";

import { signup } from "../../actions/session_actions";
import SessionForm from './SessionForm';

const msp = state => {
  return {
    errors: state.errors.session,
    type: 'signup',
  };
};

const mdp = dispatch => {
  return {
    processForm: data => dispatch(signup(data))
  };
};

export default connect(msp, mdp)(SessionForm);

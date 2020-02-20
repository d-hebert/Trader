import { connect } from "react-redux";

import TransactionForm from './TransactionForm';
import { getPortfolio } from '../../actions/portfolio_actions';
import { refreshCurrentUser } from '../../actions/session_actions';

const msp = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    getPortfolio: () => dispatch(getPortfolio()),
    refreshCurrentUser: () => dispatch(refreshCurrentUser())
  };
};

export default connect(msp, mdp)(TransactionForm);

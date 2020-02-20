import { connect } from "react-redux";

import Transactions from './Transactions';
import { getTransactions } from '../../actions/transactions_actions';

const msp = state => {
  return {
    transactions: state.entities.transactions,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions())
  };
};

export default connect(msp, mdp)(Transactions);

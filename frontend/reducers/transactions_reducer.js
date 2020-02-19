import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TRANSACTIONS } from '../actions/transactions_actions';

const transactionsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return Object.values(action.transactions)
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default transactionsReducer;

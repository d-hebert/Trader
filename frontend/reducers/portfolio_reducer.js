import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';

const portfolioReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return action.portfolio;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default portfolioReducer;

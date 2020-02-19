import { combineReducers } from "redux";
import transactionsReducer from "./transactions_reducer";
import portfolioReducer from './portfolio_reducer';

const entitiesReducer = combineReducers({
  transactions: transactionsReducer,
  portfolio: portfolioReducer
});

export default entitiesReducer;

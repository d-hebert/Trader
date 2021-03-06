import { connect } from "react-redux";

import Portfolio from './Portfolio';
import { getPortfolio } from '../../actions/portfolio_actions';
import * as stockAPI from '../../util/stock_api_util';

const msp = state => {
  return {
    portfolio: state.entities.portfolio,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    getPortfolio: () => dispatch(getPortfolio()),
    getPrice: (symbol) => dispatch(stockAPI.getPrice(symbol)),
  };
};

export default connect(msp, mdp)(Portfolio);

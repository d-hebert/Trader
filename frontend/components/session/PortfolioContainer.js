import { connect } from "react-redux";

import Portfolio from './Portfolio';
import { getPortfolio } from '../../actions/portfolio_actions';

const msp = state => {
  return {
    portfolio: state.entities.portfolio,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    getPortfolio: () => dispatch(getPortfolio())
  };
};

export default connect(msp, mdp)(Portfolio);

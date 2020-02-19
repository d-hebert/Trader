import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Header from './HeaderContainer';
import LoginForm from './forms/LoginFormContainer';
import SignupForm from './forms/SignupFormContainer';
import Transactions from './session/TransactionContainer';
import Portfolio from './session/PortfolioContainer';

const App = () => (
  <div>
    <Route path="/" component={Header} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SignupForm} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/transactions" component={Transactions} />
  </div>
);

export default App;
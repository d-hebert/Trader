import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from './forms/LoginFormContainer';
import SignupFormContainer from "./forms/SignupFormContainer";
import MainNav from './MainNavContainer';

const App = () => (
  <div>
    <header>
      <h1>Trader</h1>
    </header>
    <Route exact path="/" component={MainNav} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
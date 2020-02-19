import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, exact }) => {
  let loggedIn = Boolean(window.currentUser);
  return (
    <>
      <Route
        path={path}
        exact={exact}
        render={props =>
          loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  )
}


const mdp = dispatch => {
  return { openModal: (formType) => dispatch(openModal(formType)) }
}

export const AuthRoute = withRouter(
  connect(null, mdp)(Auth)
)
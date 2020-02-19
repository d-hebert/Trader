import * as API from "../util/api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const clearErrors = () => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: []
  };
};


export const login = (user) => (dispatch) => {
  return API.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(() => dispatch(clearErrors()))
    .fail(response => dispatch(receiveErrors(response.responseJSON)));
}

export const logout = () => (dispatch) => {
  return API.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .then(() => dispatch(clearErrors()));
}

export const signup = (user) => (dispatch) => {
  return API.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .then(() => dispatch(clearErrors()))
    .fail(response => dispatch(receiveErrors(response.response.JSON)));
}
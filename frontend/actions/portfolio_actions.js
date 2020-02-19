import * as API from "../util/api_util";
import React from 'react';
import { Redirect } from 'react-router-dom';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';

export const receivePortfolio = portfolio => {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio,
  };
};

export const getPortfolio = () => (dispatch) => {
  return API.getPortfolio()
    .then(portfolio => {
      console.log(portfolio)
      dispatch(receivePortfolio(portfolio))
    })
}
import * as API from "../util/api_util";

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export const receiveTransactions = transactions => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions,
  };
};

export const getTransactions = () => (dispatch) => {
  return API.getTransactions()
    .then(transactions => {
      dispatch(receiveTransactions(transactions))})
}
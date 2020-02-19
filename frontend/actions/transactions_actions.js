import * as API from "../util/api_util";

export const RECEIVE_TRANSACTIONS = 'RECEIVE_CURRENT_USER';

export const receiveTransactions = transactions => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions,
  };
};

export const getTransactions = () => (dispatch) => {
  return API.getTransactions()
    .then(transactions => {
      console.log(transactions)
      dispatch(receiveTransactions(transactions))})
}
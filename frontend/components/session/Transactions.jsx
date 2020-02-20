import React from 'react';

class Transactions extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    // if (this.props.currentUser) {
    //   this.setState({ transactions: Boolean(this.props.getTransactions()) })
    // }
    this.props.getTransactions();
  }

  formatTransactions() {
    const head = [];
    const body = [];
    if (this.props.transactions.length) {
      const transactions = this.props.transactions;
      head.push(
        <thead>
          <tr>
            <th id="col1">Date</th>
            <th id="col2">Symbol</th>
            <th id="col3">Type</th>
            <th id="col4">Price</th>
            <th id="col5">Quantity</th>
            <th id="col6">Total</th>
          </tr>
        </thead>
      )
      transactions.forEach(entry => {
        body.push(
          <tr key={entry.id}>
            <td>{entry.created_at}</td>
            <td>{entry.symbol}</td>
            <td>{entry.transaction_type}</td>
            <td>{entry.price}</td>
            <td>{entry.quantity}</td>
            <td>{entry.price * entry.quantity}</td>
          </tr>
        )
      })
    }
  return [...head, <tbody> {body} </tbody>];
  }

  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div id="transaction-table">
          <h1>Transactions</h1>
          <table id="transaction-list-cont">
            <tbody>
              {this.formatTransactions()}
            </tbody>
          </table>
        </div>
      )
    } else { return null }
  }

}

export default Transactions;
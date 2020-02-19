import React from 'react';

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.props.getTransactions();
  }

  formatTransactions() {
    const output = [];
    if (this.props.transactions.length) {
      const transactions = this.props.transactions;
      transactions.forEach(entry => {
        output.push(
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
    return output;
  }

  render() {
    return (
      <div>
        <h1>Transactions</h1>
        <table id="transaction-list-cont">
          <tbody>
            {this.formatTransactions()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Transactions;
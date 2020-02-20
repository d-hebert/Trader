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
    const currentUser = this.props.currentUser;
    debugger
    if (currentUser) {
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
    } else { return null }
  }

}

export default Transactions;
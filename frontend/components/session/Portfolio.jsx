import React from 'react';

import TransactionForm from '../forms/TransactionFormContainer';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    
  }

  componentDidMount() {
    this.props.getPortfolio();
  }

  formatPortfolio() {
    const output = [];
    if (this.props.portfolio.portfolio) {
      const portfolio = this.props.portfolio.portfolio;
      const symbols =  Object.keys(portfolio);
      let i = 0
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const quantity = portfolio[symbol];
        output.push(
          <tr key={i}>
            <td>{symbol}</td>
            <td>{quantity}</td>
          </tr>
        );
      }
    }
    return output;
  }

  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <>
        <div>
          <h1>Portfolio</h1>
          <table id="portfolio-list-cont">
            <tbody>
              {this.formatPortfolio()}
            </tbody>
          </table>
        </div>
        <TransactionForm />
        </>
      )
    } else { return null }
  }

}

export default Portfolio;
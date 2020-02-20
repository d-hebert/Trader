import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.props.getPortfolio();
  }

  formatPortfolio() {
    const output = [];
    debugger
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
    return (
      <div>
        <h1>Portfolio</h1>
        <table id="portfolio-list-cont">
          <tbody>
            {this.formatPortfolio()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Portfolio;
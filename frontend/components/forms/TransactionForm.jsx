import React from 'react';
import { Redirect } from 'react-router-dom';

import * as stockAPI from '../../util/stock_api_util';

import { postTransaction } from '../../util/api_util';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      quantity: '',
      type: 'buy',
      price: 0.00,
      validSymbol: false,
      error: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateSymbol = this.updateSymbol.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getPrice();
    if (this.state.validSymbol) {
      const currentUser = this.props.currentUser;
      const transaction = {
        symbol: this.state.symbol,
        quantity: this.state.quantity,
        transaction_type: this.state.type,
        price: this.state.price,
        user_id: currentUser.id,
      }
      postTransaction(transaction);
      this.props.refreshCurrentUser();
    } else {
      this.setState({ error: 'Invalid symbol' })
    }
  }

  // update(field) {
    
  // return ((e) => this.setState({
  //     [field]: e.currentTarget.value
  //   }))
  // }

  updateQuantity(e) {
    this.setState({
      quantity: e.currentTarget.value
    })
  }

  updateSymbol(e) {
    this.setState({
      symbol: e.currentTarget.value,
      price: ''
    })
  }
  
  getPrice() {
    const symbol = this.state.symbol;
    let price;
    stockAPI.getPrice(symbol)
      .then( res => { 
        price = res.latestPrice;
        this.setState({ validSymbol: true });
        this.setState({ price })
      })
  }

  updateType(type) {
    this.setState({ type })
  }

  formatButton() {
    if (this.state.validSymbol) {
      return (<input type="submit" value={this.state.type} />)
    } else {
      return (
        <button onClick={() => this.getPrice()}>
          Get Price
        </button>
      )
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    const price = this.state.price;
    console.log(price);
    return (
      <div>
        <div>
          <button onClick={() => this.updateType('buy')}>buy</button>
          <button onClick={() => this.updateType('sell')}>sell</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <span>Wallet: {currentUser.wallet}</span>
          <br />
          <label htmlFor="symbol">
            <input
              type="text"
              value={this.state.symbol}
              onChange={this.updateSymbol}
              placeholder="Ticker symbol"
            />
          </label>
          <br />
          <span>
            Price per share: ${price}
          </span>
          <br />
          <label htmlFor="quantity">
            Quantity:
            <input
              type="number"
              value={this.state.password}
              min="0"
              max="999"
              step="1"
              onChange={this.updateQuantity}
              placeholder=""
            />
          </label>
          {this.formatButton()}
        </form>
      </div>
    )
  }
}

export default TransactionForm;
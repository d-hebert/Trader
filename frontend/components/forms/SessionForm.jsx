import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    }

    this.props.clearErrors();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return ( (e) => this.setState({
      [field]: e.currentTarget.value
    }))
  }

  handleErrors() {
    if (this.props.errors.length === 0) {
      return < div className="errors-blank" > {this.props.errors}</div >
    } else {
      return < div className="errors" > {this.props.errors}</div >
    }
  }

  render() {
    if (this.props.loggedIn) { return <Redirect to ='/portfolio'/> }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </label>
          <input type="submit" value={this.props.type}/>
        </form>
        {this.handleErrors()}
      </div>
    );
  }
}

export default SessionForm;
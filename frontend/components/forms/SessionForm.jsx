import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
      redirect: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({errors:this.props.errors})
    if (!this.state.errors.length) { this.setState({redirect: true}) }
  }

  update(field) {
    return ( (e) => this.setState({
      [field]: e.currentTarget.value
    }))
  }

  handleErrors() {
    const { errors } = this.state;
    if (errors.length) {
      return (
      <div>{errors}</div>
      )
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) { return <Redirect to ='/'/> }
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
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
      return < div className="form-error" > {this.props.errors}</div >
    } else {
      return < div className="form-error" > {this.props.errors}</div >
    }
  }

  render() {
    if (this.props.loggedIn) { return <Redirect to ='/portfolio'/> }
    return (
      <div className="forms">
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.type}</h1>
          <br />
          <label htmlFor="email" />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
          <label htmlFor="password" />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          <br />
          <input type="submit" value={this.props.type}/>
          <br />
        </form>
        {this.handleErrors()}
      </div>
    );
  }
}

export default SessionForm;
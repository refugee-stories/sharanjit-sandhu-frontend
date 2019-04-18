import React from "react";
import "./Login.css";

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // STEP V Create the login function, it will call the action creator and
  // pass in the credendials from the form
  login = async (e) => {
    e.preventDefault();
    await this.props.login(this.state.credentials)
    this.props.history.push("/pending-approvals");
  
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.login}>
            <label>Username</label>
            <input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login

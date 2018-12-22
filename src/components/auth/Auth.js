import React from 'react';
import {login} from "../../service";
import { Link } from 'react-router-dom'




class Auth extends React.Component {
    constructor() {
      super();
      this.state = {
        user: {
          email: "",
          password: ""
        }
      };
    }
  
    handleChange = e => {
      let { user } = this.state;
      let field = e.target.name;
      user[field] = e.target.value;
      this.setState({ user });
      console.log(user);
    };
  
    handleSubmit = e => {
      e.preventDefault();
      login(this.state.user, this.props.history);
    };
  
    render() {
      let { email, password } = this.state.user;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="box">
            <div>
              <label htmlFor="">
                Email:
                <input
                  onChange={this.handleChange}
                  type="email"
                  value={email}
                  name="email"
                  placeholder="ejemplo@ejemplo.com"
                />
              </label>
            </div>
  
            <div>
              <label htmlFor="">
                Password:
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={password}
                />
              </label>
            </div>

                
            <button type="submit">Login</button>
          </div>
          <Link to="/register">No tienes cuenta</Link>
        </form>
      );
    }
  }
  
  export default Auth;
import React, {Component} from 'react';
import {register} from "../../service";


class Register extends Component{

    constructor(){
        super();
        this.state =  {
            user: {
                username:"",
                email: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        register(this.state.user, this.props.history)
    };

    render(){

        let {email, password, confirmPassword, username} = this.state.user;

        return (
            <form onSubmit={this.handleSubmit}>
            <div className='box'>

             <div>
                    <label htmlFor="">
                        Username
                        <input
                            onChange={this.handleChange}
                            type="username"
                            value={username}
                            name="username"
                            placeholder="username"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Email:
                        <input
                            onChange={this.handleChange}
                            type="email"
                            value={email}
                            name="email"
                            placeholder="ejemplo@ejemplo.com"/>
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Password:
                        <input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            value={password}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Confirm Password:
                        <input
                            onChange={this.handleChange}
                            type="password"
                            value={confirmPassword}
                            name="confirmPassword"/>
                    </label>
                </div>
                <button type="submit">Register</button>
                    </div>
            </form>
        )
    }
}

export default Register;

  

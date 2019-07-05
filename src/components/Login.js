import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '' };
    }
    loginPasswordForm() {
        return (
            <div>
                <input value={this.state.login} name="login" placeholder="введите логин" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                <input value={this.state.password} name="password" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
            </div>
        )
    }
    handleTextareaChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }
    render() {
        return (
            <div className="registrationForm">
                {this.loginPasswordForm()}
            </div>
        )
    }
}
export default Login;
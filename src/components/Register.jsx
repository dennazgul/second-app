import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '', passwordrep: '' };
    }
    handleTextareaChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    testgg = () => {
        const { login, password } = this.state;
        const form = {
            login,
            password
        };
        axios.post('http://localhost:1488/register', form)
            .then((response) => { console.log(response.status) })
            .catch((error) => alert(error));
    }

    render() {
        return (
            <div className="registrationForm">
                <div>
                    <input value={this.state.login} name="login" placeholder="введите логин" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input value={this.state.password} name="password" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input value={this.state.passwordrep} name="passwordrep" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <button onClick={this.testgg}>Отправить</button>
                </div>
            </div>
        )
    }
}
export default Login;
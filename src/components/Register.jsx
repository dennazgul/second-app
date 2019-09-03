import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldInfo: [{ login: '', password: '', passwordrep: '' }],
            getLogged: null,
        };
    }
    handleTextareaChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    /* registration submit = () => {
        const { login, password } = this.state;
        const form = {
            login,
            password
        };
        axios.post('http://localhost:1488/register', form)
            .then((response) =>  this.props.handle(response.data.id))
            .catch((error) => alert(error));
    }*/
    submit = () => {
        if (!this.props.regAbler) {
            const { login, password } = this.state;
            const form = {
                login,
                password
            };
            axios.post('http://localhost:1488/login', form)
                .then((response) => this.props.handle(response.data.id))
                .catch((error) => alert(error));
        } else {
            const { login, password } = this.state;
            const form = {
                login,
                password
            };
            axios.post('http://localhost:1488/register', form)
                .then((response) => this.props.handle(response.data.id))
                .catch((error) => alert(error));
        }
    }

    render() {
        return (
            <div className="registrationForm">
                <div>
                    <span hidden={!this.props.regAbler}>Регистрация</span>
                    <span hidden={this.props.regAbler}>Вход</span>
                    <div></div>
                    <input value={this.state.fieldInfo.login} name="login" placeholder="введите логин" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input value={this.state.fieldInfo.password} name="password" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input hidden={!this.props.regAbler} value={this.state.fieldInfo.passwordrep} name="passwordrep" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <button onClick={this.submit}>Отправить</button>
                </div>
            </div>
        )
    }
}
export default Login;
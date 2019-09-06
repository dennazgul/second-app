import React from 'react';
import '../App.css';
import axios from 'axios';
import { withRouter } from "react-router";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldInfo: [{ login: '', password: '', passwordrep: '' }],
            getLogged: []
        };
    }
    handleTextareaChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submit = () => {
        if (!this.props.regAbler) {
            const { login, password } = this.state;
            const form = {
                login,
                password
            };
            axios.post('http://localhost:1488/login', form)
                .then((response) => {this.props.sendBoards(response.data)
                this.props.history.push('/boards')} )
                .catch((error) => alert(error));
        } else {
            const { login, password } = this.state;
            const form = {
                login,
                password
            };
            axios.post('http://localhost:1488/register', form)
                .then((response) => {this.props.sendUserId(response.data.id);
                this.props.history.push('/boards')})
                .catch((error) => alert(error));
        }
    }

    render() {
        return (
            <div className="registrationForm">
                <div>
                    <span hidden={!this.props.regAbler}>Регистрация</span>{/*косметические*/}
                    <span hidden={this.props.regAbler}>Вход</span>{/*косметические*/}
                    <input value={this.state.fieldInfo.login} name="login" placeholder="введите логин" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input value={this.state.fieldInfo.password} type="password" name="password" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
                    <input hidden={!this.props.regAbler} value={this.state.fieldInfo.passwordrep} name="passwordrep"
                    placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>{/*прячется если выбран "вход"*/}
                    <button onClick={this.submit}>Отправить</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);
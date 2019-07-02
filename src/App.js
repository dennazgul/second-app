import React from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    this.loginForm = { able: false }
  }
  loginPasswordForm() {
    return (
      <div>
        <input value={this.state.login} name="login" placeholder="введите логин" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
        <input value={this.state.password} name="password" placeholder="введите пароль" onChange={this.handleTextareaChange} cols="40" rows="3"></input>
      </div>
    )
  }
  ablerFunc = () => {
    this.setState({ able: this.loginForm.able = !this.loginForm.able });
  }
  handleTextareaChange = (event) =>
    this.setState({ [event.target.name]: event.target.value })
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          </div>
          <div><span className="App-link" onClick={this.ablerFunc}>Вход</span>
          {this.loginForm.able && this.loginPasswordForm()}
          </div>
          <span>
            <a href="https://google.com"
              className="App-link">
              Регистрация
          </a>
          </span>
        </header>
      </div>
    );
  }
}
export default NameForm;

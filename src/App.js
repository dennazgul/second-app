import React from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'fefef' };
  }
  handleTextareaChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <textarea value={this.state.value} name="comment" onChange={this.handleTextareaChange} cols="40" rows="3"></textarea>
          </div>
          <span>
            <a href="https://google.com"
              className="App-link">
              Вход</a>
          </span>
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

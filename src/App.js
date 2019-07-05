import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="representText">
            <Link to="/">
              <span className="screenText representText">Тестовый проект (чтобы разобраться с React)
            <img src={require('./assets/image.png')} width="36px"></img>
              </span>
            </Link>
          </div>
          <Link to="/login">
            <span className="App-link" >Вход</span>
          </Link>
          <Link to="/registration">
            <span className="App-link">
              Регистрация
          </span>
          </Link>
        </header>
        <div class="App-body">
          <div>
            <Route path="/" exact component={Home} /><Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;

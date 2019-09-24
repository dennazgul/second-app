import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Boards from './components/Boards';
import MainHeader from './components/MainHeader';
import Register from './components/Register';
import ColumnsTable from './components/ColumnsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      userId: 0,
      userName: '',
      regAbler: false
    }
  }
  sendData = (userData) => {
    this.setState({ boardArray: userData.boardList, userId: userData.userId, userName: userData.userName })
  }
  sendUser = (user) => {
    this.setState({ boardArray: [], userId: user.id, userName: user.name })
  }

  regOrLogin = (e) => {
    if (e.target.id == 0) {
      this.setState({ regAbler: true })
    } else {
      this.setState({ regAbler: false })
    }
  }
  logout = () => {
    this.setState({ userId: 0, userName: '' })
  }

  addBoard = (boardArray) => {
    this.setState({ boardArray})
  }

  render() {
    return (
      <Router>
        <MainHeader
          regOrLogin={this.regOrLogin}
          logout={this.logout}
          userId={this.state.userId}
          userName={this.state.userName}
        />
        <Route path="/login" render={() => <Register sendData={this.sendData} regAbler={this.state.regAbler} />} />
        <Route path="/registration" render={() => <Register sendUser={this.sendUser} regAbler={this.state.regAbler} />} />
        <Route path="/boards" render={() => <Boards addBoard={this.addBoard} board={this.state.boardArray} userId={this.state.userId} />} />
        <Route path="/board/:id" render={() => <ColumnsTable userId={this.state.userId}/>} />
        <Redirect to="/" />
      </Router>
    );
  }
}
export default App;

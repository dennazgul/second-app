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
      userId:0,
      regAbler: false
    }
  }
  sendBoards = (boardArray) => {
    this.setState({ boardArray })
  }
  sendUserId = (userId) => {
    this.setState({ boardArray: [], userId })
  }

  regOrLogin = (e) => {
    if (e.target.id == 0) {
    this.setState({ regAbler: true })
  } else {
    this.setState({ regAbler: false })
  }
}

  render() {
    return (
      <Router>
        <MainHeader regOrLogin={this.regOrLogin}/>
        <Route path="/login" render={() => <Register sendBoards={this.sendBoards} regAbler={this.state.regAbler} />} />
        <Route path="/registration" render={() => <Register sendUserId={this.sendUserId} regAbler={this.state.regAbler} />} />
        <Route path="/boards" render={() => <Boards board={this.state.boardArray} userId={this.state.userId}/>} />
        <Route path="/board/:id" render={() => <ColumnsTable />} />
        <Redirect to="/"/>
      </Router>
    );
  }
}
export default App;

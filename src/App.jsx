import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Board from './components/Board';
import Project from './components/Project';
import MainHeader from './components/MainHeader';
import { withRouter } from "react-router";
import Register from './components/Register';
import ColumnsTable from './components/ColumnsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      regAbler: false
    }
  }
  sendBoards = (boardArray) => {
    this.setState({ boardArray })

  }
  render() {
    return (
      <Router>
        <MainHeader />
        <Route path="/login" render={() => <Register sendBoards={this.sendBoards} regAbler={this.state.regAbler} />} />
        <Route path="/registration" render={() => <Register sendBoards={this.sendBoards} regAbler={this.state.regAbler} />} />
        <Route path="/boards" render={() => <Project board={this.state.boardArray} />} />
        <Route path="/board/:id" render={() => <ColumnsTable />} />
        <Redirect to="/"/>
      </Router>
    );
  }
}
export default App;

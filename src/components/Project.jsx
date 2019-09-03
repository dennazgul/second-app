import React from 'react';
import '../App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from './Board';
import Header from './Header';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      userId: 0,
    };
  }
  handle = (userId) => {
    this.setState({ userId })
  }

  render() {
    return (
      <Router>
        <Route render={() => <Header handle={this.handle} />} />
        <Route render={() => <Board userId={this.state.userId} />} />
      </Router>
    );
  }
}
export default Project;

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from './Header';
import axios from 'axios';
import ColumnsTable from './ColumnsTable';
import InProgressTable from './InProgressTable';
import Register from './Register';
import { withRouter } from "react-router";

class BoardAppearance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      body: '',
    };
  }
  openBoard = () => {
    this.props.history.push(`/board/${this.state.boardArray.id}`)

  }
  setIdea = (event) => {
    this.setState({ body: event.target.value })
  }
  submit = () => {
    let board = {
      name: this.state.body,
      userId: this.props.userId
    };
    this.state.body = ''
    //debugger
    axios.post('http://localhost:1488/board', board).then((response) => {
      let arc = Object.assign([], this.state.boardArray);
      arc.push(response.data)
      this.setState({ boardArray: arc });
    }).catch((error) => console.log("RESPONSE", error));
  }

  componentDidMount() {
    this.setState({boardArray: this.props.board})
    console.log(this.props.board)
  }

  render() {
    return (<div onClick={this.openBoard}>
     {this.state.boardArray.name}
    </div>
    )
  }
}
export default withRouter(BoardAppearance);
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from './Header';
import axios from 'axios';
import ColumnsTable from './ColumnsTable';
import InProgressTable from './InProgressTable';
import Register from './Register';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      body: '',
    };
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
    console.log(this.props.userId)
    axios.get(`http://localhost:1488/board/${this.props.userId}`).then((response) => {
      this.setState({ boardArray: response.data })
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) 
    {console.log(this.props.userId)
    axios.get(`http://localhost:1488/board/${this.props.userId}`).then((response) => {
      this.setState({ boardArray: response.data });
      
    })
  }
}

  render() {
    return (<div ><div>
      <div style={{ textAlign: "center" }}>
      </div>
      {this.state.boardArray.map((post) => {
        return (
          <div >
            <div>{post.name}</div>
            <ColumnsTable colId={post.id} userId={this.props.userId}/>
          </div>
        )
      })}
    </div>
    <div hidden={this.props.userId}>Для того, чтобы воспользоваться услугами создания досок с тасками, нужно войти в систему</div>
    <div hidden={!this.props.userId}>
      <textarea value={this.state.body} onChange={this.setIdea}></textarea>
      <button onClick={this.submit} disabled={!this.state.body}>Добавить борду</button>
      </div>
    </div>
    )
  }
}
export default Board;
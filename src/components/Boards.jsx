import React from 'react';
import '../App.css';
import { Route } from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router";
import BoardAppearance from './BoardAppearance';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      userId: 0,
      body: ''
    };
  }

  setIdea = (event) => {
    this.setState({ body: event.target.value })
  }

  submit = () => {
    let board = {
      name: this.state.body,
      userId: this.state.userId
    };
    //debugger
    axios
      .post('http://localhost:1488/board', board)
      .then((response) => {
        let arc = Object.assign([], this.state.boardArray);
        arc.push(response.data)
        this.setState({ boardArray: arc }, () => {
          this.props.addBoard(this.state.boardArray)
        });
      })
      .catch((error) => console.log("RESPONSE", error));
  }

  deleteBoard = (e) => {
    let boardId = e.target.id;
    axios.delete(`http://localhost:1488/board/${boardId}/`).then(() => {
      this.setState({ boardArray: this.state.boardArray.filter(obj => obj.id != boardId) })
    }).catch((error) => console.warn("RESPONE", error));
  }

  refuseBoardAccess = (e) => {
    let sharedUserId = this.state.userId;
    let sharedBoardId = e.target.id;
    axios.delete(`http://localhost:1488/refuseBoardAccess/${sharedUserId}/${sharedBoardId}`).then(() => {
      this.setState({ boardArray: this.state.boardArray.filter(obj => obj.id != sharedBoardId) })
    }).catch((error) => console.warn("RESPONE", error));
  }

  componentDidMount() {
    this.setState({ boardArray: this.props.board, userId: this.props.userId })
  }

  render() {
    return (
      <div>
        {this.state.boardArray.map((post) => {
          return (<div className="boardTable" key={post.id}>
            <Route render={() => <BoardAppearance
              board={post}
              userId={this.state.userId}
              deleteBoard={this.deleteBoard}
              refuseBoardAccess={this.refuseBoardAccess} />} />
          </div>
          )
        })}
        <div className="underBoardTable">
          <textarea className="addBoard" value={this.state.body} onChange={this.setIdea}></textarea>
        </div>
        <div>
          <button onClick={this.submit} disabled={!this.state.body}>Добавить борду</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Boards);

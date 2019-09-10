import React from 'react';
import '../App.css';
import { withRouter } from "react-router";

class BoardAppearance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: '',
    };
  }
  openBoard = () => {
    this.props.history.push(`/board/${this.state.boardData.id}`)
  }

  componentDidMount() {
    this.setState({boardData: this.props.board}) 
  }

  render() {
    return (<div className="boardContainer" onClick={this.openBoard}>
     <div className="boardAppearance">Имя борды: {this.state.boardData.name}</div>
    </div>
    )
  }
}
export default withRouter(BoardAppearance);
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
    return (<div onClick={this.openBoard}>
     {this.state.boardData.name}
    </div>
    )
  }
}
export default withRouter(BoardAppearance);
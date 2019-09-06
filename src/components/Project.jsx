import React from 'react';
import '../App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from './Board';
import Header from './Header';
import { withRouter } from "react-router";
import BoardAppearance from './BoardAppearance';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: []
    };
  }

  componentDidMount() {
    this.setState({boardArray: this.props.board})
  }

  render() {

    return (<div>
      {this.state.boardArray.map((post) => {
        return (<div>
          <Route render={()=><BoardAppearance board={post}/>} />
          </div>
        )
      })}
     {/* <Route path="/board" render = {()=><Board userId={this.state.userId}/>} />*/}
    </div>
    );
  }
}
export default withRouter(Project);

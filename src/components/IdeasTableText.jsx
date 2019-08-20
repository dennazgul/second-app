import React from 'react';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import '../App.css';
import IdeasTable from './IdeasTable';

class IdeasTableText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tableContent">
                {this.props.mainText}<br></br>
                <div class="keyAndButton">
                <div></div>
                <button id={this.props.id} onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        )
    }
}
export default IdeasTableText;
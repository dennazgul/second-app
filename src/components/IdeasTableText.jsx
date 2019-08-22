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
        if (this.props.colId == this.props.cardId) {
            return (
                <div className="ideasTable">
                    <div className="tableContent">
                        {this.props.mainText}<br></br>
                        <div class="keyAndButton">
                            <div></div>
                            <button id={this.props.id} onClick={this.props.delete}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
export default IdeasTableText;
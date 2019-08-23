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
        const {id, deleteButton, value} = this.props;
        return (
            <div className="ideasTable">
                <div className="tableContent">
                    {value}<br></br>
                    <div class="keyAndButton">
                        <div></div>
                        <button id={id} onClick={deleteButton}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeasTableText;
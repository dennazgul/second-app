import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';

class IdeasTableText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tableContent">
                {this.props.text}
            </div>
        )
    }
}
export default IdeasTableText;
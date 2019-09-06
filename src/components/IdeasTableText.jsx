import React from 'react';
import '../App.css';

class IdeasTableText extends React.Component {
    render() {
        const {id, deleteButton, value} = this.props;
        return (
            <div className="ideasTable">
                <div className="tableContent">
                    {value}<br></br>
                    <div className="keyAndButton">
                        <div></div>
                        <button id={id} onClick={deleteButton}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeasTableText;
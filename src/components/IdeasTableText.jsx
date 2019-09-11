import React from 'react';
import '../App.css';

class IdeasTableText extends React.Component {
    render() {
        const {id, deleteButton, value} = this.props;
        return (
            <div>
                <div className="tableContent">
                    <span>{value}</span><br></br>
                    <div className="keyAndButton">
                        <div></div>
                        <i id={id} onClick={deleteButton} className="fas fa-trash-alt delete-mark"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeasTableText;
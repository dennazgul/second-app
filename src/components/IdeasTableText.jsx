import React from 'react';
import '../App.css';

function IdeasTableText (props) {
        const {cardId, deleteCard, value} = props;
        const handleClick = () => {
            deleteCard(cardId)
        }
        return (
            <div>
                <div className="tableContent">
                    <span>{value}</span><br></br>
                    <div className="keyAndButton">
                        <div></div>
                        {props.creatorId == props.userId || props.userId == props.boardOwner.id
                        ?
                        <i onClick={handleClick} className="fas fa-trash-alt"></i>
                        :
                        null}
                    </div>
                </div>
            </div>
        )
    }
export default IdeasTableText;
import React from 'react';
import '../App.css';

function SharedUserList(props) {
    const handleClick = () => {
        props.forbidBoard(props.sharedUserId)
    }
    return <div class="userList">
        <div>{props.sharedUserName}{props.sharedUserId == props.ownerId ? <i class="far fa-star"></i> : null}</div>
        {props.userId == props.ownerId && props.sharedUserId != props.ownerId
            ?
            <div><span>Запретить доступ</span><i onClick={handleClick} class="fas fa-user-times"></i></div>
            :
            <div></div>}
    </div>
}
export default SharedUserList;
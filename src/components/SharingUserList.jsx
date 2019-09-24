import React from 'react';
import '../App.css';

function SharingUserList (props) {
    const handleClick =() =>{
        props.shareBoard(props.id, props.name)
    }
    return <div class="userList">
    <div>{props.name}</div>
    <div><span>Поделиться</span><i onClick={handleClick} class="fas fa-share-square redirect-mark"></i></div>
    </div>
  }
  export default SharingUserList;
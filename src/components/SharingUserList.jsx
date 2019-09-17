import React from 'react';
import '../App.css';

function SharingUserList (props) {
    return <div class="userList">
    <div>{props.name}</div>
    <div><span>Поделиться бордой</span><i id={props.id} onClick={props.shareBoard} class="fas fa-share-square redirect-mark"></i></div>
    </div>
  }
  export default SharingUserList;
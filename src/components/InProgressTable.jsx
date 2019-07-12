import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';

function IdeasTable() {
    return (
        <div className="ideasTable">
            <div className="tableName">Сейчас в работе</div>
            <div className="tableContent">Красивая надпись на главной странице! Нажми что-нибудь другое</div>
        </div>
    )
}
export default IdeasTable;
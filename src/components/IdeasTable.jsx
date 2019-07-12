import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';
import IdeasTableText from './IdeasTableText';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/urlConstsants';

function submit() {
    let user = {
        name: this.state.username,
        password: this.state.password
    };
    axios.post(REGISTER, user).then((response) => {
    }).catch((error) => alert(error));
}

function IdeasTable() {
    return (
        <div className="ideasTable">
            <div className="tableName">Список идей</div>
            <div className="tableContent"><IdeasTableText /></div>
        </div>
    )
}
export default IdeasTable;
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';

function Registration() {
    return (
        <div className="registrationForm">
            <div><input  placeholder ="Имя" ></input></div>
            <div><input  placeholder ="Фамилия"></input></div>
            <div><input  placeholder ="Ориентация"></input></div>
            <div><input  placeholder ="Опыт работы"></input></div>
        </div>
    )
}
export default Registration;
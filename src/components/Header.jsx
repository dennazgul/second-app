import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import InProgressTable from './InProgressTable';

function Header() {
    return (<div>
        <div className="headerTop">
            <img src={require('../assets/image.png')} width="36px"></img>
        </div>
        <div className="headerBot">
            <span>Мы рады приветствовать вас ЗДЕСЬ!</span>
            <Link to="/register">
            <span>Регистрация</span>
            </Link>
            
        </div>
    </div>
    )
}
export default Header;
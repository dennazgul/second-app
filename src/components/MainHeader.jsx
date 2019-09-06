import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import InProgressTable from './InProgressTable';
import Register from './Register';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regAbler: true
        };

    }
    registration = (e) => {
        this.setState({ regAbler: true })
        console.log(e.target.id)
    }
    login = () => {
        this.setState({ regAbler: false })
    }
    render() {
        return (
            <div>
                <div className="headerTop">
                    <img src={require('../assets/image.png')} width="36px"></img>
                    <span>Мы рады приветствовать вас ЗДЕСЬ!</span>
                </div>
                <div>
                <div className="headerTop">
                    <img src={require('../assets/image.png')} width="36px"></img>
                </div>
                <div className="headerBot">
                    <Link to="/registration">
                        <span className="logRegButton" id="1" onClick={this.registration}>Регистрация</span>
                    </Link>
                    <Link to="/login">
                        <span className="logRegButton" id="2" onClick={this.login}>Вход</span>
                    </Link>
                </div>
            </div>
            </div>

        )
    }
}
export default MainHeader;

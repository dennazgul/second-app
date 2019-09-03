import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import InProgressTable from './InProgressTable';
import Register from './Register';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regAbler: true
        };

    }
    registration = () => {
        this.setState({ regAbler: true })
    }
    login = () => {
        this.setState({ regAbler: false })
    }
    render() {
        return (
            <div>
                <div className="headerTop">
                    <img src={require('../assets/image.png')} width="36px"></img>
                </div>
                <div className="headerBot">
                    <span>Мы рады приветствовать вас ЗДЕСЬ!</span>
                    <Link to="/login">
                        <span className="logRegButton" onClick={this.registration}>Регистрация</span>
                    </Link>
                    <Link to="/login">
                        <span className="logRegButton" onClick={this.login}>Вход</span>
                    </Link>
                    <Route path="/login" render={() => <Register handle={this.props.handle} regAbler={this.state.regAbler} />} />
                </div>
            </div>
        )
    }
}
export default Header;

import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { withRouter } from "react-router";

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regAbler: true,
            sasat: new Date()
        };

    }

    logout = () => {
        this.props.logout();
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="headerTop">
                    <span>Мы рады приветствовать вас ЗДЕСЬ{this.props.userName ? <span>{', ' + this.props.userName}</span> : null}!</span>
                </div>
                <div>
                    <div className="headerTop">
                        <img src={require('../assets/image.png')} alt={'coolPic'} width="36px"></img>
                    </div>
                    {this.props.userId ?
                        <div className="headerBot"><span className="logRegButton" onClick={this.logout}><i className="fas fa-sign-out-alt redirect-mark"></i></span></div>
                        :
                        <div className="headerBot">
                            <Link to="/registration">
                                <span className="logRegButton" id="0" onClick={this.props.regOrLogin}>Регистрация</span>
                            </Link>
                            <Link to="/login">
                                <span className="logRegButton" id="1" onClick={this.props.regOrLogin}>Вход</span>
                            </Link>
                            {console.log(this.state.sasat.toString())}
                        </div>
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(MainHeader);

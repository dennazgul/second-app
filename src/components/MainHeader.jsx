import React from 'react';
import { Link} from "react-router-dom";
import '../App.css';

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
                    <span>Мы рады приветствовать вас ЗДЕСЬ!</span>
                </div>
                <div>
                <div className="headerTop">
                    <img src={require('../assets/image.png')} alt={'coolPic'} width="36px"></img>
                </div>
                <div className="headerBot">
                    <Link to="/registration">
                        <span className="logRegButton" id="0" onClick={this.props.regOrLogin}>Регистрация</span>
                    </Link>
                    <Link to="/login">
                        <span className="logRegButton" id="1" onClick={this.props.regOrLogin}>Вход</span>
                    </Link>
                </div>
            </div>
            </div>

        )
    }
}
export default MainHeader;

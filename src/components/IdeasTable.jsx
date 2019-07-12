import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';
import IdeasTableText from './IdeasTableText';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/urlConstsants';

class IdeasTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [{ key: 1, value: '1234' }, { key: 2, value: '1324234' }, { key: 3, value: '145675674' }],
            body: ''
        };
    }
    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }


    addIdea = (event) => {
        //const copy = Object.assign([], this.state.postArray)
        //copy.push(this.state.Body)
        //this.state.Body = '' Варик из видоса
        this.state.postArray.push(this.state.body)
        //this.state.Body = ''; //мой варик this.state.postArray.push(this.state.Body)
        this.setState({ postArray: this.state.postArray, body: ''});
    }
    render() {
        console.warn(this.state);
        return (
            <div className="ideasTable">
                <div className="tableName" onClick={click}>Список идей</div>

                {this.state.postArray.map((post) => {
                    return (<IdeasTableText
                        key={post.key}
                        text={post.value} />
                    )
                })
                }
                <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                <button onClick={this.addIdea}>Добавить идею</button>
            </div>
        )
    }
}

function submit() {
    let user = {
        name: this.state.username,
        password: this.state.password
    };
    axios.post(REGISTER, user).then((response) => {
    }).catch((error) => alert(error));
}

function click() {
    let ur = "";
    if (ur) {

    }
}

/*function IdeasTable() {
    return (
        <div className="ideasTable">
            <div className="tableName" onClick={click}>Список идей</div>
            <div className="tableContent"><IdeasTableText /></div>
            <div>{Login.state}</div>
        </div>
    )
}*/
export default IdeasTable;
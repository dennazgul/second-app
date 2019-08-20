import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';
import IdeasTableText from './IdeasTableText';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/urlConstsants';
import { reject } from 'q';

class IdeasTable extends React.Component {
    constructor(props) {
        super(props);
        this.keyCreator = 1;
        this.state = {
            postArray: [],
            head: '',
            body: ''
        };

    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }
    baseInfo = (response) => {
        this.setState({ postArray: response.data })
    }
    submit = () => {
        let user = {
            mainText: this.state.body,
        };
        this.state.body = ''
        //debugger
        axios.post('http://localhost:1488/', user).then((response) => {
            let arc = Object.assign([], this.state.postArray);
            arc.push(response.data)
            this.setState({ postArray: arc });
        }).catch((error) => console.log("RESPONSE", error));
    }

    delete = (e) => {
        let deletingId = e.target.id;
        axios.delete(`http://localhost:1488/228/${e.target.id}`).then(() => {
            this.setState({ postArray: this.state.postArray.filter(obj => obj.id != deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    componentDidMount() {
        axios.get('http://localhost:1488/').then((response) => {
            this.setState({ postArray: response.data })
        }).catch((error) => console.warn("RESPONE", error));
    }

    render() {
        const { postArray } = this.state;
        return (
            <div className="ideasTable">
                <div className="tableName" >Список идей</div>
                {postArray.map((post) => {
                    return (<IdeasTableText
                        mainText={post.mainText}
                        id={post.id}
                        delete={this.delete} />
                    )
                })
                }
                <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                <button onClick={this.submit} disabled={!this.state.body}>Добавить идею</button>
            </div>
        )
    }
}
export default IdeasTable;
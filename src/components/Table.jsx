import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';
import IdeasTable from './IdeasTable';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/urlConstsants';
import { reject } from 'q';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.keyCreator = 1;
        this.state = {
            postArray: [],
            head: '',
            body: ''
        };
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
export default Table;
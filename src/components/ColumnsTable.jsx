import React from 'react';
import { BrowserRouter } from "react-router-dom";
import '../App.css';
import IdeasTable from './IdeasTable';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/urlConstsants';
import { reject } from 'q';

class ColumnsTable extends React.Component {
    constructor(props) {
        super(props);
        this.keyCreator = 1;
        this.state = {
            columnArray: [],
            body: '',
        };

    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }
    baseInfo = (response) => {
        this.setState({ columnArray: response.data })
    }
    submit = () => {
        let user = {
            value: this.state.body,
        };
        this.state.body = ''
        //debugger
        axios.post('http://localhost:1488/', user).then((response) => {
            let arc = Object.assign([], this.state.columnArray);
            arc.push(response.data)
            this.setState({ columnArray: arc });
        }).catch((error) => console.log("RESPONSE", error));
    }

    delete = (e) => {
        let deletingId = e.target.id;
        axios.delete(`http://localhost:1488/228/${e.target.id}`).then(() => {
            this.setState({ columnArray: this.state.columnArray.filter(obj => obj.id != deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    componentDidMount() {
        axios.get('http://localhost:1488/col').then((response) => {
            this.setState({ columnArray: response.data })
        })
    }

    render() {
        const { columnArray } = this.state;

        return (
                 <div className="bodyContainer">
                {columnArray.map((post) => {
                    return (<div className="ideasTable">{post.name}
                        <IdeasTable
                            colId={post.id}
                        />
                    </div>)
                })
                }
                <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                <button onClick={this.submit} disabled={!this.state.body}>Добавить колонку</button>
            </div>

        )
    }
}
export default ColumnsTable;
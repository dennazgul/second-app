import React from 'react';
import '../App.css';
import IdeasTable from './IdeasTable';
import axios from 'axios';
import { withRouter } from "react-router";


class ColumnsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnArray: [],
            body: '',
        };

    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }

    submit = () => {
        let user = {
            name: this.state.body,
            boardId: this.props.match.params.id
        };
        axios.post('http://localhost:1488/col', user).then((response) => {
            let arc = Object.assign([], this.state.columnArray);
            arc.push(response.data)
            this.setState({ columnArray: arc, body: '' });
        }).catch((error) => console.log("RESPONSE", error));
    }

    componentDidMount() {
        axios.get(`http://localhost:1488/col/${this.props.match.params.id}`).then((response) => {
            this.setState({ columnArray: response.data })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.colId !== prevProps.colId) {
            axios.get(`http://localhost:1488/col/${this.props.colId}`).then((response) => {
                this.setState({ columnArray: response.data })
            })
        }
    }

    render() {
        console.log(this.props);
        const { columnArray } = this.state;
        return (
            <div className="bodyContainer">
                {columnArray.map((post) => {
                    return (<div className="ideasTable" key={post.id}>{post.name}
                        <IdeasTable
                            colId={post.id}
                        />
                    </div>)
                })
                }
                <div>
                    <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                    <button onClick={this.submit} disabled={!this.state.body}>Добавить колонку</button>
                </div>
            </div>

        )
    }
}
export default withRouter(ColumnsTable);
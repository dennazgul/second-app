import React from 'react';
import '../App.css';
import IdeasTableText from './IdeasTableText';
import axios from 'axios';

class IdeasTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            body: '',

        };

    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }

    submit = () => {
        let user = {
            value: this.state.body,
            colId: this.props.colId,
        };
        //debugger
        axios.post('http://localhost:1488/card', user).then((response) => {
            let arc = Object.assign([], this.state.postArray);
            arc.push(response.data)
            this.setState({ postArray: arc, body: '' });
        }).catch((error) => console.log("RESPONSE", error));
    }

    deleteTable = (e) => {
        let deletingId = Number(e.target.id);
        axios.delete(`http://localhost:1488/card/${deletingId}`).then(() => {
            this.setState({ postArray: this.state.postArray.filter(obj => obj.id !== deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    componentDidMount() {
        axios.get(`http://localhost:1488/card/${this.props.colId}`).then((response) => {
            this.setState({ postArray: response.data })
        }).catch((error) => console.warn("RESPONE", error))
    }

    render() {
        const { postArray } = this.state;
        return (<div className="ideasTable">
            {postArray.map((post) => {
                return (<div key={post.id}><IdeasTableText
                    value={post.value}
                    id={post.id}
                    deleteButton={this.deleteTable} /></div>
                )
            })
            }
            <div className="columnBottom">
                <div ><i id={this.props.colId} onClick={this.props.deleteColumn} className="fas fa-lg fa-trash-alt"></i></div>
                <div >
                    <textarea placeholder="Добавить идею" value={this.state.body} onChange={this.setIdea}></textarea>
                    <button onClick={this.submit} disabled={!this.state.body}><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
        )
    }
}
export default IdeasTable;
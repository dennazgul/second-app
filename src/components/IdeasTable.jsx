import React from 'react';
import '../App.css';
import IdeasTableText from './IdeasTableText';
import axios from 'axios';

class IdeasTable extends React.Component {
    constructor(props) {
        super(props);
        this.keyCreator = 1;
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

    delete = (e) => {
        let deletingId = e.target.id;
        axios.delete(`http://localhost:1488/228/${e.target.id}`).then(() => {
            this.setState({ postArray: this.state.postArray.filter(obj => obj.id !== deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    componentDidMount() {
        axios.get(`http://localhost:1488/card/${this.props.colId}`).then((response) => {
            this.setState({ postArray: response.data })}).catch((error) => console.warn("RESPONE", error))
        }

    render() {
        const { postArray } = this.state;
        return (<div>
            {postArray.map((post) => {
                return (<div key={post.id}><IdeasTableText
                    value={post.value}
                    id={post.id}
                    deleteButton={this.delete} /></div>
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
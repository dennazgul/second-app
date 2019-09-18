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
    handleClick = () => {
        this.props.deleteColumn(this.props.colId)
    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }

    addTable = () => {
        let card = {
            value: this.state.body,
            creatorId: this.props.userId,
            colId: this.props.colId,
        };
        //debugger
        axios.post('http://localhost:1488/card', card).then((response) => {
            let arc = Object.assign([], this.state.postArray);
            arc.push(response.data)
            this.setState({ postArray: arc, body: '' });
        }).catch((error) => console.log("RESPONSE", error));
    }

    deleteCard = (id) => {
        let deletingId = Number(id);
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
                    userId={this.props.userId}
                    creatorId={post.creatorId}
                    boardOwner={this.props.boardOwner}
                    value={post.value}
                    cardId={post.id}
                    deleteCard={this.deleteCard} /></div>
                )
            })
            }
            <div className="columnBottom">
                <div>{this.props.creatorId == this.props.userId || this.props.userId == this.props.boardOwner.id
                    ?
                    <i onClick={this.handleClick} className="fas fa-lg fa-trash-alt"></i>
                    :
                    null}
                </div>
                <div>
                    <textarea placeholder="Добавить идею" value={this.state.body} onChange={this.setIdea}></textarea>
                    <button onClick={this.addTable} disabled={!this.state.body}><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
        )
    }
}
export default IdeasTable;
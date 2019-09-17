import React from 'react';
import '../App.css';
import IdeasTable from './IdeasTable';
import SharingUserList from './SharingUserList';
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router";


class ColumnsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnArray: [],
            userArray: [],
            body: '',
            loginSearchBody: '',
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
        axios.post('http://localhost:1488/column', user).then((response) => {
            let arc = Object.assign([], this.state.columnArray);
            arc.push(response.data)
            this.setState({ columnArray: arc, body: '' });
        }).catch((error) => console.log("RESPONSE", error));
    }
    deleteColumn = (e) => {
        let deletingId = Number(e.target.id);
        axios.delete(`http://localhost:1488/column/${deletingId}`).then(() => {
            this.setState({ columnArray: this.state.columnArray.filter(obj => obj.id !== deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    handleSearch = (e) => {
        this.setState({ loginSearchBody: e.target.value }, () => {
            if (this.state.loginSearchBody.length > 2) {
                axios.get(`http://localhost:1488/user/${this.state.loginSearchBody}/${this.props.userId}`).then((response) => {
                    this.setState({ userArray: response.data }, () => { console.log(this.state.userArray) })
                }).catch((error) => console.warn("RESPONE", error));
            } else {
                this.setState({ userArray: [] })
            }
        })
    }

    shareBoard = (e) => {
        let sharingInfo = {
            sharingUserId: e.target.id,
            boardId: this.props.match.params.id
        }
        axios.post('http://localhost:1488/shareBoard', sharingInfo).then((response) =>
            alert('Вы предоставили пользователю доступ к борде!')
        ).catch((error) => alert('не фартануло'));
    }

    componentDidMount() {
        axios.get(`http://localhost:1488/column/${this.props.match.params.id}`).then((response) => {
            this.setState({ columnArray: response.data })
        })
    }

    /*componentDidUpdate(prevProps) {
        if (this.props.colId !== prevProps.colId) {
            axios.get(`http://localhost:1488/col/${this.props.colId}`).then((response) => {
                this.setState({ columnArray: response.data })
            })
        }
    }*/

    render() {
        const { columnArray, userArray } = this.state;
        return (<div>
            <Link to="/boards">
                <div className="returnToBoards"><i class="fas fa-list redirect-mark"></i></div>
            </Link>
            <div className="columnsAndMenuContainer">
                <div className="columnsContainer">
                    {columnArray.map((post) => {
                        return (<div className="alignCenter" key={post.id}><div className="columnName">{post.name}</div>
                            <IdeasTable
                                colId={post.id}
                                deleteColumn={this.deleteColumn}
                            />

                        </div>)
                    })
                    }
                    <div className="addColumn">
                        <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                        <div><button onClick={this.submit} disabled={!this.state.body}>Добавить колонку</button></div>
                    </div>
                </div>
                <div>
                    <input type="text" onChange={this.handleSearch} />
                    {userArray.length ?
                        userArray.map((post) => {
                            return <SharingUserList
                                id={post.id}
                                name={post.name}
                                shareBoard={this.shareBoard}
                            />
                        })
                        :
                        null
                    }
                </div>
            </div>
        </div>
        )
    }
}
export default withRouter(ColumnsTable);
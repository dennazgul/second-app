import React from 'react';
import '../App.css';
import IdeasTable from './IdeasTable';
import SharingUserList from './SharingUserList';
import SharedUserList from './SharedUserList';
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router";
import { NotificationContainer, NotificationManager } from 'react-notifications';


class ColumnsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnArray: [],
            usersForSharingArray: [],
            sharedUsersArray: [],
            boardOwner: '',
            body: '',
            loginSearchBody: '',
        };

    }

    setIdea = (event) => {
        this.setState({ body: event.target.value })
    }

    addColumn = () => {
        let column = {
            name: this.state.body,
            creatorId: this.props.userId,
            boardId: this.props.match.params.id
        };
        axios.post('http://localhost:1488/column', column).then((response) => {
            let arc = Object.assign([], this.state.columnArray);
            arc.push(response.data)
            this.setState({ columnArray: arc, body: '' });
        }).catch((error) => console.log("RESPONSE", error));
    }

    deleteColumn = (id) => {
        let deletingId = Number(id);
        axios.delete(`http://localhost:1488/column/${deletingId}`).then(() => {
            this.setState({ columnArray: this.state.columnArray.filter(obj => obj.id !== deletingId) })
        }).catch((error) => console.warn("RESPONE", error));
    }

    handleSearch = (e) => {
        this.setState({ loginSearchBody: e.target.value }, () => {
            if (this.state.loginSearchBody.length > 2) {
                axios.get(`http://localhost:1488/user/${this.state.loginSearchBody}/${this.props.userId}/${this.props.match.params.id}`).then((response) => {
                    this.setState({ usersForSharingArray: response.data })
                }).catch((error) => console.warn("RESPONE", error));
            } else {
                this.setState({ usersForSharingArray: [] })
            }
        })
    }

    forbidBoard = (deletingId) => {
        axios.delete(`http://localhost:1488/refuseBoardAccess/${deletingId}/${this.props.match.params.id}`).then(() => {
            this.setState({ sharedUsersArray: this.state.sharedUsersArray.filter(obj => obj.id !== deletingId) },
                () => { NotificationManager.success('Доступ отменён', <i class="fas fa-user-minus"></i>, 800) }
            )
        }).catch((error) => {
            NotificationManager.error('Ошибка', <i class="fas fa-exclamation-triangle"></i>, 800)
        })
    }

    shareBoard = (id, name) => {
        let sharingInfo = {
            sharingUserId: id,
            boardId: this.props.match.params.id
        }
        axios.post('http://localhost:1488/shareBoard', sharingInfo).then((response) => {
            let arc = Object.assign([], this.state.sharedUsersArray);
            arc.push({ id, name })
            this.setState({ usersForSharingArray: this.state.usersForSharingArray.filter(obj => obj.id != sharingInfo.sharingUserId), sharedUsersArray: arc },
                () => {
                    NotificationManager.success('Доступ одобрен', <i class="fas fa-user-check"></i>, 800)
                })
        }
        ).catch((error) => {
            NotificationManager.error('Ошибка', <i class="fas fa-exclamation-triangle"></i>, 800)
        });
    }

    callMod = () => {
        console.log('ff')
    }

    componentDidMount() {
        axios.get(`http://localhost:1488/column/${this.props.match.params.id}`).then((response) => {
            this.setState({ columnArray: response.data.columnArray, boardOwner: response.data.boardOwner, sharedUsersArray: response.data.sharedUsersArray })
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
        const { columnArray, usersForSharingArray, sharedUsersArray } = this.state;
        return (<div>
            <Link to="/boards">
                <div className="returnToBoards"><i class="fas fa-list redirect-mark"></i></div>
            </Link>
            <div class="notifContainer"><NotificationContainer /></div>
            <div className="columnsAndMenuContainer">
                <div className="columnsContainer">
                    {columnArray.map((post) => {
                        return (<div className="alignCenter" key={post.id}><div className="columnName">{post.name}</div>
                            <IdeasTable
                                userId={this.props.userId}
                                creatorId={post.creatorId}
                                boardOwner={this.state.boardOwner}
                                colId={post.id}
                                deleteColumn={this.deleteColumn}
                            />

                        </div>)
                    })
                    }
                    <div className="addColumn">
                        <textarea value={this.state.body} onChange={this.setIdea}></textarea>
                        <div><button className="addButton" onClick={this.addColumn} disabled={!this.state.body}>Добавить колонку</button></div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Участники:</span>
                        {sharedUsersArray.map((post) => {
                            return <SharedUserList
                                userId={this.props.userId}
                                sharedUserId={post.id}
                                ownerId={this.state.boardOwner.id}
                                sharedUserName={post.name}
                                forbidBoard={this.forbidBoard}
                            />
                        })
                        }
                        <input type="text" onChange={this.handleSearch} /><span>Имя пользователя</span>
                        {usersForSharingArray.length
                            ?
                            usersForSharingArray.map((post) => {
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
        </div>
        )
    }
}
export default withRouter(ColumnsTable);
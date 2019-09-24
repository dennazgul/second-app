import React from 'react';
import '../App.css';
import axios from 'axios';
import { withRouter } from "react-router";

class OpenedCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editAbler: false,
            body: this.props.value
        };
    }
    editValue = () => {
        this.state.editAbler ?
            this.setState({ editAbler: false, body: this.props.value })
            :
            this.setState({ editAbler: true })

    }
    setIdea = (e) => {
        this.setState({ body: e.target.value })
    }
    closeModal = () => {
        this.setState({body: this.props.value, editAbler: false}, () => {
            this.props.closeModal()
        })
    }
    saveNewValue = () => {
        this.setState({ editAbler: false }, () => {
            let editedCard = {
                id: this.props.cardId,
                value: this.state.body
            }
            axios.post('http://localhost:1488/editCard', editedCard).then((response) => {
                this.props.saveNewValue(this.state.body)
            }
            ).catch((error) => {
                console.log(error)
            })
        })
    }

    render() {
        return (<div>
            {this.props.abler
                ? <div>
                    <div class="modalBackground">
                    </div>
                    <div class="modalDialog">
                        <i class="fas fa-times" onClick={this.closeModal}></i>
                        {this.state.editAbler
                            ?
                            <div><input value={this.state.body} onChange={this.setIdea} /><i onClick={this.saveNewValue} class="far fa-save"></i></div>
                            :
                            <div>{this.state.body}</div>
                        }
                        {this.props.host ? <div><i onClick={this.editValue} class="fas fa-edit"></i></div> : null}
                    </div>
                </div>
                : null}
        </div>)
    }
}
export default OpenedCard;
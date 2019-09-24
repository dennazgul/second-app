import React from 'react';
import '../App.css';
import OpenedCard from './OpenedCard';

class IdeasTableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abler: false,
            value: this.props.value,
            host: false
        }
    }
    handleClick = () => {
        this.props.deleteCard(this.props.cardId)
    }
    modalAbler = () => {
        this.setState({ abler: true })
    }
    closeModal = () => {
        this.setState({ abler: false })
    }
    saveNewValue = (value) => {
        this.setState({ value })
    }
    componentDidMount() {
        this.props.creatorId == this.props.userId || this.props.userId == this.props.boardOwner.id
            ?
            this.setState({ host: true })
            :
            this.setState({ host: false })
    }
    render() {
        return (
            <div>
                <div className="tableContent">
                    <span>{this.state.value}</span><br></br>
                    <div className="keyAndButton">
                        <div><OpenedCard
                            cardId={this.props.cardId}
                            value={this.state.value}
                            abler={this.state.abler}
                            closeModal={this.closeModal}
                            saveNewValue={this.saveNewValue}
                            host={this.state.host}
                        /></div>
                        <i class="fas fa-book-open" onClick={this.modalAbler}></i>
                        {this.state.host
                            ?
                            <i onClick={this.handleClick} className="fas fa-trash-alt"></i>
                            :
                            null}
                    </div>
                </div>
            </div>
        )
    }
}
export default IdeasTableText;
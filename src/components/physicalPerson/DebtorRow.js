import React, { Component } from 'react';

class DebtorRow extends Component {
    constructor(props) {
        super(props);
        this.state = { person: this.props.person, index: this.props.index };
        this.getDetailsOfPerson = this.getDetailsOfPerson.bind(this);
    }

    getDetailsOfPerson(event) {
        let selectedItem = event.target.parentElement;
        console.log(selectedItem);
    }

    render() {
        return <tr id={this.state.person.id} onClick={this.getDetailsOfPerson}>
            <td>{this.state.index}</td>
            <td>{this.state.person.firstName}</td>
            <td>{this.state.person.lastName}</td>
        </tr>;
    };
}

export default DebtorRow;
import React, { Component } from 'react';

class DebtorRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: this.props.person,
            index: this.props.index
        };
    }

    render() {
        return (
            <tr id={this.state.person.id} onClick={this.props.setSelectedPerson}>
                <td>{this.state.index}</td>
                <td>{this.state.person.firstName}</td>
                <td>{this.state.person.lastName}</td>
            </tr>
        );
    };
}

export default DebtorRow;
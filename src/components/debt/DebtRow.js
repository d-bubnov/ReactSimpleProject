import React, { Component } from 'react';

class DebtRow extends Component {
    constructor(props) {
        super(props);
        this.state = { debt: this.props.debt, index: this.props.index };
        this.getDetailsOfDebt = this.getDetailsOfDebt.bind(this);
    }

    getDetailsOfDebt(event) {
        let selectedItem = event.target.parentElement;
        console.log(selectedItem);
    }

    render() {
        return <tr id={this.state.debt.id} onClick={this.getDetailsOfDebt}>
            <td>{this.state.index}</td>
            <td>{this.state.debt.description}</td>
        </tr>;
    };
}

export default DebtRow;
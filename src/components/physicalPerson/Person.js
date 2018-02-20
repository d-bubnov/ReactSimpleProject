import React, { Component } from 'react';

class Person extends Component {
    constructor(props){
        super(props);
        this.state = { person: this.props.person };
    }

    render() {
        return <p>Name: {this.state.person.firstName} {this.state.person.lastName} {this.state.person.patronymic}, phone: {this.state.person.phoneNumber}</p>;
    };
}

export default Person;
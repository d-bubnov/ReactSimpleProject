import React, { Component } from 'react';

class Person extends Component {
    render() {
        return <p>Name: {this.props.person.firstName} {this.props.person.lastName} {this.props.person.patronymic}, phone: {this.props.person.phoneNumber}</p>;
    };
}

export default Person;
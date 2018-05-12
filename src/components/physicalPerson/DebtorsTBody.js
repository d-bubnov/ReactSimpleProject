import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

import DebtorRow from './DebtorRow';

const physicalPersonsQuery = gql`
    query PhysicalPersonsQuery {
        physicalPersons {
            id
            firstName
            lastName
        }
    }
`;

const graphQlQuery = graphql(physicalPersonsQuery);

class DebtorsTBodyComponent extends Component {
    render() {
        const { data: { loading, error, physicalPersons }} = this.props;
        if (loading) {
            return <tbody><tr><td colSpan="3">Loading...</td></tr></tbody>;
        } else if (error) {
            return <tbody><tr><td colSpan="3">{error.message}</td></tr></tbody>;
        } else {
            return <tbody>{ physicalPersons.map((person, index) => <DebtorRow setSelectedPerson={this.props.setSelectedPerson} person={person} key={person.id} index={index + 1}/>) }</tbody>;
        }
    }
}

const DebtorsTBody = graphQlQuery(DebtorsTBodyComponent);

export default  DebtorsTBody;
/**
 * Get list of physical persons
 * */

import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

const physicalPersonsQuery = gql`
    query PhysicalPersonsQuery {
        physicalPersons {
            id
            firstName
            lastName
        }
    }
`;

const PhysicalPersonsHandler = ({ data: { loading, error, physicalPersons }}) => {
    if (loading) {
        return <p>Loading...</p>
    } else if (error) {
        console.log('error: ' + error);
        return <p>{error.message}</p>
    } else {
        console.log('physicalPersons: ' + JSON.stringify(physicalPersons));
        return <ul>{ physicalPersons.map( pp => <li key={pp.id}>{pp.lastName} {pp.firstName}</li> ) }</ul>
    }
};

const PhysicalPersonsComponent = graphql(physicalPersonsQuery)(PhysicalPersonsHandler);

export default PhysicalPersonsComponent;
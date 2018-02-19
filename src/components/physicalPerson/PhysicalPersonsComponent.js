/**
 * Get list of physical persons
 * */

import React from 'react';
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

const PhysicalPersonsHandler = ({ data: { loading, error, physicalPersons }}) => {
    if (loading) {
        return <tbody><tr><td colSpan="3">Loading...</td></tr></tbody>;
    } else if (error) {
        console.log('error: ' + error);
        return <tbody><tr><td colSpan="3">{error.message}</td></tr></tbody>;
    } else {
        console.log('physicalPersons: ' + JSON.stringify(physicalPersons));

        return <tbody>
        {
            physicalPersons.map((person, index) =>
            <DebtorRow person={person} key={person.id} index={index + 1}/>)
        }
        </tbody>;
    }
};

const PhysicalPersonsTBody = graphql(physicalPersonsQuery)(PhysicalPersonsHandler);

export default PhysicalPersonsTBody;
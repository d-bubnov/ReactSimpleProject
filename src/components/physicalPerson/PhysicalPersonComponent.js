/**
 * Get one physical person
 * */

import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

const physicalPersonQuery = gql`
    query PhysicalPersonQuery($physicalPersonId: ID!) {
        physicalPerson(id: $physicalPersonId) {
            id
            firstName
            lastName
            patronymic
            phoneNumber
        }
    }
`;

const physicalPersonHandler = ({ data: { loading, error, physicalPerson }}) => {
    if (loading) {
        return <p>Loading person...</p>
    } else if (error) {
        console.log('error: ' + error);
        return <p>An error occurred while loading data...</p>
    } else {
        if (physicalPerson) {
            console.log('physicalPerson: ' + JSON.stringify(physicalPerson));
            return <p key={physicalPerson.id}>Name: {physicalPerson.firstName} {physicalPerson.lastName} {physicalPerson.patronymic}, phone: {physicalPerson.phoneNumber}</p>
        } else {
            console.log('Physical person is not found.');
            return <p>Physical person is not found.</p>
        }
    }
};

const PhysicalPersonComponent = graphql(
    physicalPersonQuery,
    {
        options: () => ({
            variables: { physicalPersonId: '322845fc-0146-4e3b-80f9-3aafa5de584d' }
        })
    })(physicalPersonHandler);

export default PhysicalPersonComponent;
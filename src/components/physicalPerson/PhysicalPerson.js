/**
 * Get one physical person
 * */

import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

import Person from './Person';

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
        // console.log('error: ' + error);
        return <p>An error occurred while loading data...</p>
    } else {
        if (physicalPerson) {
            // console.log('physicalPerson: ' + JSON.stringify(physicalPerson));
            return <Person person={physicalPerson}/>
        } else {
            // console.log('Physical person is not found.');
            return <p>Physical person is not found.</p>
        }
    }
};

const PhysicalPerson = graphql(
    physicalPersonQuery,
    {
        options: () => ({
            variables: { physicalPersonId: 'ab463b8b-a76c-4f6a-a726-75ab5730b69b' }
        })
    })(physicalPersonHandler);

export { PhysicalPerson };
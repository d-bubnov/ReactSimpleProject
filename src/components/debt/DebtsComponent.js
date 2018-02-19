/**
 * Get debts
 * */

import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

const debtsQuery = gql`
    query DebtsQuery {
        debts {
            id
            description
        }
    }
`;

const DebtsHandler = ({ data: { loading, error, debts }}) => {
    if (loading) {
        return <p>Loading...</p>
    } else if (error) {
        console.log('error: ' + error);
        return <p>{error.message}</p>
    } else {
        console.log('debts: ' + JSON.stringify(debts));
        return <ul>{ debts.map( debt => <li key={debt.id}>{debt.description}</li> ) }</ul>
    }
};

const DebtsComponent = graphql(debtsQuery)(DebtsHandler);

export default DebtsComponent;
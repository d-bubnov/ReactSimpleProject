import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-client-preset';

import DebtRow from './DebtRow'

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
        return <tbody><tr><td colSpan="2">Loading...</td></tr></tbody>;
    } else if (error) {
        // console.log('error: ' + error);
        return <tbody><tr><td colSpan="2">{error.message}</td></tr></tbody>
    } else {
        // console.log('debts: ' + JSON.stringify(debts));
        return <tbody>{ debts.map( (debt, index) => <DebtRow key={debt.id} debt={debt} index={index + 1}/> ) }</tbody>;
    }
};

const DebtsTBody = graphql(debtsQuery)(DebtsHandler);

export default DebtsTBody;
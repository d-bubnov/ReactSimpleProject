// import React components
import React from 'react';
import ReactDOM from 'react-dom';

// import GraphQL components
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import DOM components
import DebtorsTable from './components/physicalPerson/DebtorsTable';
import PhysicalPersonComponent from './components/physicalPerson/PhysicalPerson';
import DebtsTable from './components/debt/DebtsTable';

// initialize apollo client by apollo server
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: 'http://localhost:3000/graphql' })
});

// React element
const element =
    <ApolloProvider client={client}>
        <div>
            <DebtorsTable/>
            <div>
                <h4>Main physical person:</h4>
                <PhysicalPersonComponent/>
            </div>
            <DebtsTable/>
        </div>
    </ApolloProvider>;

// render element to container
const container = document.getElementById("root");

// render page
ReactDOM.render(element, container);

console.log('loaded');
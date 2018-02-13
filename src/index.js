import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import {
    graphql,
    ApolloProvider
} from 'react-apollo'

import {
    ApolloClient,
    gql
} from 'apollo-client-preset'

import { createHttpLink, HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import ItemList from './components/search/search_item_list';
import SearchDataList from './components/data/search_data_list';
import ButtonComponent from './components/time/button_time';
import HypnosisForm from './components/hypnosis/hypnosis_form';

import VideoPage from './components/pages/video';
import AboutPage from './components/pages/about/about_site';
import NotFoundPage from './components/pages/not_found';
import MainPage from './components/pages/main';
import NavPage from './components/pages/nav';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: 'http://localhost:3000/graphql' })
});


// ----------------------------------------------------------------------------------------------------------------
// Get list of physical persons
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


// ----------------------------------------------------------------------------------------------------------------
// Get one physical person
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
        console.log('physicalPerson: ' + JSON.stringify(physicalPerson));
        return <p key={physicalPerson.id}>Name: {physicalPerson.firstName} {physicalPerson.lastName} {physicalPerson.patronymic}, phone: {physicalPerson.phoneNumber}</p>
    }
};

const PhysicalPersonComponent = graphql(
    physicalPersonQuery,
    {
        options: () => ({
            variables: { physicalPersonId: '322845fc-0146-4e3b-80f9-3aafa5de584d' }
        })
    })(physicalPersonHandler);


// -----------------------------------------------------------------------------------------------------------------
// Get debts
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




ReactDOM.render(
    <ApolloProvider client={client}>
        <div>
            <div>
                <h4>Physical persons:</h4>
                <PhysicalPersonsComponent/>
            </div>
            <div>
                <h4>Main physical person:</h4>
                <PhysicalPersonComponent/>
            </div>
            <div>
                <h4>List of debts:</h4>
                <DebtsComponent/>
            </div>
        </div>
    </ApolloProvider>,
    document.getElementById("routing-block")
);

// ReactDOM.render(
//     <BrowserRouter>
//         <div>
//             <NavPage />
//             <Switch>
//                 <Route exact path="/" component={MainPage} />
//                 <Route path="/about" component={AboutPage} />
//                 <Route path="/phones" render={ (props) => (
//                     <ItemList {...props} data={SearchDataList} />
//                 )} />
//                 <Route path="/hypnosis" component={HypnosisForm} />
//                 <Route path="/timepage" component={ButtonComponent} />
//                 <Route path="/youtubevideo" component={VideoPage}/>
//                 <Route component={NotFoundPage} />
//             </Switch>
//             <div>
//                 <ApolloProvider client={client}>
//                     <div>
//                         <PhysicalPersonsWithData />
//                     </div>
//                 </ApolloProvider>
//             </div>
//         </div>
//     </BrowserRouter>,
//     document.getElementById("routing-block")
// );
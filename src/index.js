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

const PhysicalPersons = ({ data: { loading, error, physicalPersons }}) => {
    if (loading) {
        console.log('loading');
        return <p>Loading...</p>
    } else if (error) {
        console.log('error: ' + error);
        return <p>{error.message}</p>
    } else {
        console.log('object: ' + physicalPersons);
        return <ul>
            { physicalPersons.map( pp => <li key={pp.id}>{pp.lastName}</li> ) }
        </ul>
    }
}

const physicalPersonsQuery = gql`
    query PhysicalPersonsQuery {
        physicalPersons {
            id
            firstName
            lastName
        }
    }
`;

const PhysicalPersonsWithData = graphql(physicalPersonsQuery)(PhysicalPersons);




ReactDOM.render(
    <ApolloProvider client={client}>
        <div>
            <PhysicalPersonsWithData />
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
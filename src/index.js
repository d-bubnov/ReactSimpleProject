import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ItemList from './components/search/search_item_list';
import SearchDataList from './components/data/search_data_list';
import ButtonComponent from './components/time/button_time';

import AboutPage from './components/pages/about_site';
import NotFoundPage from './components/pages/not_found';
import MainPage from './components/pages/main';
import NavPage from './components/pages/nav';
import HypnosisForm from './components/hypnosis/hypnosis_form';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavPage />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/phones" render={ (props) => (
                    <ItemList {...props} data={SearchDataList} />
                )} />
                <Route path="/hypnosis" component={HypnosisForm} />
                <Route path="/timepage" component={ButtonComponent} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("routing-block")
);
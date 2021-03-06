import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ItemList from './components/search/search_item_list';
import SearchDataList from './components/data/search_data_list';
import ButtonComponent from './components/time/button_time';
import HypnosisForm from './components/hypnosis/hypnosis_form';


import VideoPage from './components/pages/video';
import AboutPage from './components/pages/about/about_site';
import NotFoundPage from './components/pages/not_found';
import MainPage from './components/pages/main';
import NavPage from './components/pages/nav';

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
                <Route path="/youtubevideo" component={VideoPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("routing-block")
);
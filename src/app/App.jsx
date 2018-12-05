import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Link } from 'react-router';
import DebtorsTable from '../components/physicalPerson/DebtorsTable';
import DebtsTable from '../components/table/DebtsTable';
import '../style/style.css';

// initialize apollo client by apollo server
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: 'http://localhost:3000/graphql' })
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };

        this.renderMobileNav = this.renderMobileNav.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.renderNavigation = this.renderNavigation.bind(this);
    }

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    static navigationLinks() {
        return [
            <ul>
                <li key={1}><Link to="about">ABOUT</Link></li>
                <li key={2}><Link to="blog">BLOG</Link></li>
                <li key={3}><Link to="portfolio">PORTFOLIO</Link></li>
            </ul>
        ];
    }

    renderMobileNav() {
        if(this.state.mobileNavVisible) {
            return App.navigationLinks();
        }
    }

    handleNavClick() {
        if(!this.state.mobileNavVisible) {
            this.setState({mobileNavVisible: true});
        } else {
            this.setState({mobileNavVisible: false});
        }
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1080) {
            return [
                <div className="mobile_nav">
                    <p onClick={this.handleNavClick.bind(this)}><i className="material-icons">view_headline</i></p>
                    {this.renderMobileNav()}
                </div>
            ];
        } else {
            return [
                <div key={7} className="nav_menu">
                    {App.navigationLinks()}
                </div>
            ];
        }
    }

    render() {
        return (
            <div>
                <div className="nav_container">
                    <div className="site_title"><Link to="/">WEBSITE TITLE</Link></div>
                    {this.renderNavigation()}
                </div>
                <ApolloProvider client={client}>
                    <div>
                        <DebtorsTable/>
                        <DebtsTable/>
                    </div>
                </ApolloProvider>
            </div>
        );
    }
}

export default App;

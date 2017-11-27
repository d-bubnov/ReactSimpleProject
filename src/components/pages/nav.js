import React from 'react';
import { Link } from 'react-router-dom';

class NavPage extends React.Component{
    render(){
        return <nav className="center-cursive-text">
            <Link to="/"> Main page </Link>
            <Link to="/about"> About site </Link>
            <Link to="/phones"> Phones </Link>
            <Link to="/hypnosis"> Hypnosis </Link>
            <Link to="/timepage"> Time? </Link>
        </nav>;
    }
}

export default NavPage;
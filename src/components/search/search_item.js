import React, { Component } from 'react';

class Item extends Component {
    render(){
        return <li>{this.props.name}</li>
    }
}

export default Item;
import React, { Component } from 'react';
import Item from './search_item';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items };
        this.filterList = this.filterList.bind(this);
    }

    filterList(event){
        let filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });

        this.setState({ items: filteredList });
        if (filteredList.length === 0){
            alert('Sorry! We do not have model of your phone... Try again!');
        } else if (filteredList.length === 1){
            alert("Model of your phone is '" + filteredList[0] + "'!")
        }
    }

    render() {
        return(
            <div className="center-cursive-text">
                <h4 className="center-cursive-text">
                    Do you have mobile phone? Of course yes! Please find your model of phone in the next block.
                </h4>
                <h3>{this.props.data.title}</h3>
                <input placeholder='search model...' onChange={this.filterList}/>
                <ul className="phone-list">
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item}/>
                        })
                    }
                </ul>
            </div>);
    }
}

export default ItemList;
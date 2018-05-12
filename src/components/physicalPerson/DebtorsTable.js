import React, { Component } from 'react';
import DebtorsTBody from './DebtorsTBody';
import { Table }from 'react-bootstrap';

import { PhysicalPerson } from './PhysicalPerson';

class DebtorsTable extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            selectedPersonId: null
        };

        this.setSelectedPerson = this.setSelectedPerson.bind(this);
    }

    setSelectedPerson(event) {
        this.setState({
            selectedPersonId: event.target.parentElement.id
        });

        console.log(event.target.parentElement.id);
    }

    render() {
        return(
            <div>
                <div>
                    <h4>Physical persons:</h4>
                    <Table className="table-persons" striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>First name</th>
                                <th>Last name</th>
                            </tr>
                        </thead>
                        <DebtorsTBody setSelectedPerson={this.setSelectedPerson} />
                    </Table>
                </div>
                <div>
                    <h2>Selected physical person:</h2>
                    <PhysicalPerson selectedPersonId={this.state.selectedPersonId} />
                </div>
            </div>
        );
    }
}

export default DebtorsTable;
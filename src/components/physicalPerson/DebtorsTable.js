import React, { Component } from 'react';
import PhysicalPersonsTBody from './DebtorsTBody';
import { Table }from 'react-bootstrap';

class DebtorsTable extends Component
{
    render() {
        return(
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
                    <PhysicalPersonsTBody />
                </Table>
            </div>
        );
    }
}

export default DebtorsTable;
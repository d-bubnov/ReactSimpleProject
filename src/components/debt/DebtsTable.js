import React, { Component } from 'react';
import DebtsTBody from './DebtsTBody';
import { Table }from 'react-bootstrap';

class DebtorsTable extends Component
{
    render() {
        return(
            <div>
                <h4>List of debts:</h4>
                <Table className="table-persons" striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <DebtsTBody />
                </Table>
            </div>
        );
    }
}

export default DebtorsTable;
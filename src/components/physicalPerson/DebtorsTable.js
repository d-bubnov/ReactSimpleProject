import React, { Component } from 'react';
import PhysicalPersonsTBody from './PhysicalPersonsComponent';


class DebtorsTable extends Component
{
    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
                <PhysicalPersonsTBody />
            </table>
        );
    }
}

export default DebtorsTable;
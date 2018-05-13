import React, { Component } from 'react';
import { Table }from 'react-bootstrap';
import { withApollo } from 'react-apollo';
import { gql } from 'apollo-client-preset';

const debtsQuery = gql`
    query DebtsQuery {
        debts {
            id
            description
        }
    }
`;

class DebtorsTable extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            debts: [],
        };
    }

    componentDidMount() {
        try {
            this.props.client
                .query({ query: debtsQuery })
                .then(({ data: { debts } }) => {
                    if (debts) {
                        this.setState({
                            debts: debts
                        });
                    }
                });
        } catch(error) {
            console.log(error);
        }
    }

    getDetailsOfDebt(event) {
        let selectedItem = event.target.parentElement;
        console.log(selectedItem);
    }

    render() {
        return(
            <Table className="table-persons" striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.debts.map((debt, index) =>
                        <tr key={index} id={debt.id} onClick={this.getDetailsOfDebt}>
                            <td>{index + 1}</td>
                            <td>{debt.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}

export default withApollo(DebtorsTable);
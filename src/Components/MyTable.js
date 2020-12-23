import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyTable extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Part Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Engine</td>
                        <td>29th Nov 2020</td>
                        <td>Repaired</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Engine</td>
                        <td>29th Nov 2020</td>
                        <td>Repaired</td>
                        <td>n/a</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MyTable;
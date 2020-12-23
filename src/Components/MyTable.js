import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyTable extends Component {

    constructor(props) {
        super (props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getDataFromAPI()
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err));
    }

    async getDataFromAPI() {
        const response = await fetch ('http://localhost:5000/API/data');
        const body = await response.json ();
        if (response.status !== 200) {
            throw Error (body.message)
        }
        return body;
    }

    renderData(data, index) {
        return (
            <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.PartName}</td>
                <td>{data.Date}</td>
                <td>{data.Status}</td>
                <td>{data.Link}</td>
            </tr>
        )
    }

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
                        {this.state.data.map(this.renderData)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MyTable;
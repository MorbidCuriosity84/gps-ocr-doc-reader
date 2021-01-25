import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const { SearchBar } = Search;

class MyTable extends Component {

    constructor(props) {
        super (props);

        this.state = {
            data: [],
            columns: [{
                dataField: 'id',
                text: 'Product ID',
                sort: true
            }, {
                dataField: 'PartName',
                text: 'Part Name',
                sort: true
            }, {
                dataField: 'Date',
                text: 'Date',
                sort: true
            }, {
                dataField: 'Status',
                text: 'Status',
                sort: true
            }, {
                dataField: 'Link',
                text: 'Link'
            }],
            selectRow: {
                mode: 'checkbox',
                clickToSelect: true,
                clickToEdit: true
            }
        };
    }

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps !== this.props) {
            console.log (this.state);
            this.getDataFromAPI ()
                .then (res => this.setState ({data: res.data}))
                .catch (err => console.log (err));
        }
    }

    componentDidMount() {
        this.getDataFromAPI ()
            .then (res => this.setState ({data: res.data}))
            .catch (err => console.log (err));

    }

    async getDataFromAPI() {
        const response = await fetch ('http://localhost:5000/API/data');
        const body = await response.json ();
        if (response.status !== 200) {
            throw Error (body.message)
        }
        return body;
    }

    render() {
        return (
            <div>
                <ToolkitProvider
                    keyField="id"
                    data={ this.state.data }
                    columns={ this.state.columns }
                    search
                >
                    {
                        props => (
                            <div>
                                <h3>Input something at below input field:</h3>
                                <SearchBar { ...props.searchProps } />
                                <hr />
                                <BootstrapTable
                                    {...props.baseProps }
                                    keyField='id'
                                    data={this.state.data}
                                    columns={this.state.columns}
                                    selectRow={ this.state.selectRow }
                                    cellEdit={cellEditFactory ({mode: 'dbclick'})}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        );
    }
}

export default MyTable;